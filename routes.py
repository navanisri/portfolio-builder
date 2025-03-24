from flask import Blueprint, request, jsonify
from models import db, Portfolio

api_bp = Blueprint('api', __name__)

@api_bp.route('/portfolios', methods=['GET'])
def get_portfolios():
    portfolios = Portfolio.query.all()
    return jsonify([{
        "id": p.id,
        "name": p.name,
        "description": p.description,
        "github_url": p.github_url
    } for p in portfolios])

@api_bp.route('/portfolios', methods=['POST'])
def add_portfolio():
    data = request.get_json()
    portfolio = Portfolio(
        name=data.get("name"),
        description=data.get("description"),
        github_url=data.get("github_url")
    )
    db.session.add(portfolio)
    db.session.commit()
    return jsonify({"message": "Portfolio added successfully"})
