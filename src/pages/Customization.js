import React, { useState } from 'react';
import axios from 'axios';
import ThreeDModel from '../components/ThreeDModel';

const Customization = () => {
  const [design, setDesign] = useState({
    fabric: '',
    color: '',
    style: '',
    fit: ''
  });
  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDesign((prevDesign) => ({
      ...prevDesign,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/designs/create', design);
    console.log(response.data);
  };

  const getRecommendations = async () => {
    const response = await axios.post('http://localhost:5001/recommend', design);
    setRecommendations(response.data);
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold">Customization</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-lg">Fabric:</label>
          <input type="text" name="fabric" value={design.fabric} onChange={handleChange} className="w-full p-2 border" />
        </div>
        <div>
          <label className="block text-lg">Color:</label>
          <input type="text" name="color" value={design.color} onChange={handleChange} className="w-full p-2 border" />
        </div>
        <div>
          <label className="block text-lg">Style:</label>
          <input type="text" name="style" value={design.style} onChange={handleChange} className="w-full p-2 border" />
        </div>
        <div>
          <label className="block text-lg">Fit:</label>
          <input type="text" name="fit" value={design.fit} onChange={handleChange} className="w-full p-2 border" />
        </div>
        <button type="button" onClick={getRecommendations} className="bg-green-500 text-white p-2">Get Recommendations</button>
        <button type="submit" className="bg-blue-500 text-white p-2">Submit Design</button>
      </form>
      {recommendations.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Recommendations:</h2>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index} className="mt-2">
                Fabric: {rec.fabric}, Color: {rec.color}, Style: {rec.style}, Fit: {rec.fit}
              </li>
            ))}
          </ul>
        </div>
      )}
      <ThreeDModel />
    </div>
  );
};

export default Customization;
