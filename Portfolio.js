import React from 'react';

const Portfolio = ({ portfolio }) => (
  <div>
    <h3>{portfolio.name}</h3>
    <p>{portfolio.description}</p>
    <a href={portfolio.github_url} target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
);

export default Portfolio;
