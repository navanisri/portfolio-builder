import React from 'react';
import PortfolioList from './components/PortfolioList';
import PortfolioForm from './components/PortfolioForm';

function App() {
  return (
    <div>
      <h1>Digital Portfolio Builder</h1>
      <PortfolioForm />
      <PortfolioList />
    </div>
  );
}

export default App;
