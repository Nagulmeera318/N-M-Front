import React, { useState, useEffect } from 'react';
import './Content.css';

const Content = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    // Load recently viewed items from local storage on component mount
    const storedItems = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    setRecentlyViewed(storedItems);
  }, []);

  const addToRecentlyViewed = (item) => {
    let updatedItems = [item, ...recentlyViewed];
    updatedItems = updatedItems.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.id === value.id
      ))
    );
    updatedItems = updatedItems.slice(0, 5); // Keep only the last 5 items
    setRecentlyViewed(updatedItems);
    localStorage.setItem('recentlyViewed', JSON.stringify(updatedItems));
  };

  // Example of adding an item to recently viewed (this should be triggered by user actions)
  const exampleItem = { id: 1, name: 'Example Item', imageUrl: 'https://via.placeholder.com/150' };
  useEffect(() => {
    addToRecentlyViewed(exampleItem);
  }, []);

  // Function to handle "View All" button click
  const handleViewAll = () => {
    // You can replace this with navigation to a new page or showing a modal
    alert('View all collections');
  };

  return (
    <div className="content-container">
      <section className="hero-section">
        <h1>Welcome to Fashion</h1>
        <p>Your ultimate destination for the latest fashion trends.</p>
      </section>

      <section className="offers-section">
        <h2>Exclusive Offers</h2>
        <div className="offers">
          <div className="offer">
            <img src="https://i.ibb.co/QffhfCW/kids.jpg" alt="Men's Fashion" />
            <p>winter Sale: Up to 50% off!</p>
          </div>
          <div className="offer">
            <img src="https://i.ibb.co/b3gJKZN/men-s.png" alt="Women's Fashion" />
            <p>Buy One Get One Free on select items</p>
          </div>
          <div className="offer">
            <img src="https://i.ibb.co/gVB3kv1/women-s.jpg" alt="Kids' Fashion" />
            <p>Free shipping on orders over 499</p>
          </div>
        </div>
      </section>
      
      <section className="categories-section">
        <h2>Our Collections</h2>
        <div className="categories">
          <div className="category">
            <img src="https://i.ibb.co/QffhfCW/kids.jpg" alt="Men's Fashion" />
            <h3>Men's Fashion</h3>
          </div>
          <div className="category">
            <img src="https://i.ibb.co/b3gJKZN/men-s.png" alt="Women's Fashion" />
            <h3>Women's Fashion</h3>
          </div>
          <div className="category">
            <img src="https://i.ibb.co/gVB3kv1/women-s.jpg" alt="Kids' Fashion" />
            <h3>Kids' Fashion</h3>
          </div>
        </div>
        <button className="view-all-button" onClick={handleViewAll}>View All</button>
      </section>

      <section className="recently-viewed-section">
        <h2>Recently Viewed</h2>
        <div className="recently-viewed">
          {recentlyViewed.length === 0 ? (
            <p>No recently viewed items.</p>
          ) : (
            recentlyViewed.map(item => (
              <div key={item.id} className="recently-viewed-item">
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Content;
