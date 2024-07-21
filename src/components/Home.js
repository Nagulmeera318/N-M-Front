import React from 'react';
import './Home.css';
// import Carousel from './Carousel';

const categories = [
  { id: 1, name: "Men's Wear", imageUrl: "https://i.ibb.co/b25Sc2g/colorful-design-with-spiral-design-188544-9588.jpg" },
  { id: 2, name: "Women's Wear", imageUrl: "https://i.ibb.co/b25Sc2g/colorful-design-with-spiral-design-188544-9588.jpg" },
  { id: 3, name: "Kid's Wear", imageUrl: "https://i.ibb.co/b25Sc2g/colorful-design-with-spiral-design-188544-9588.jpg" },
  // Add more categories as needed
];

const Home = () => {
  return (
    <div className="home-layout">
      <div className="sidebar offers-left">
        <div className="offer-item">Special Offer 1</div>
        {/* Add more offers as needed */}
      </div>
      <div className="home-container">
        {categories.map(item => (
          <div key={item.id} className="category-item">
            <img src={item.imageUrl} alt={item.name} className="category-image" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <div className="sidebar offers-right">
        <div className="offer-item">Special Offer 2</div>
        {/* Add more offers as needed */}
      </div>
      {/* <Carousel/> */}
    </div>
  );
};

export default Home;
