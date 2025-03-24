import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getPortfolios = async () => axios.get(`${API_URL}/portfolios`);
export const addPortfolio = async (portfolio) => axios.post(`${API_URL}/portfolios`, portfolio);
