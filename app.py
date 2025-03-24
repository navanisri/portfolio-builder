from flask import Flask
from flask_cors import CORS
from routes import api_bp
from database import db
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db.init_app(app)

# Register API routes
app.register_blueprint(api_bp, url_prefix='/api')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Ensure tables are created
    app.run(debug=True)
