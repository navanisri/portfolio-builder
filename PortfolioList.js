import React, { useEffect, useState } from 'react';
import { getPortfolios } from '../services/api';
import Portfolio from './Portfolio';

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPortfolios();
      setPortfolios(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {portfolios.map((portfolio) => (
        <Portfolio key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
};

export default PortfolioList;
