import React, { useState } from 'react';
import { addPortfolio } from '../services/api';

const PortfolioForm = () => {
  const [formData, setFormData] = useState({ name: '', description: '', github_url: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPortfolio(formData);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} />
      <input type="url" name="github_url" placeholder="GitHub URL" onChange={handleChange} />
      <button type="submit">Add Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
