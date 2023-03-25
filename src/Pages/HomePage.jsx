import React from 'react';
import cl from '../styles/HomePage.module.css';
import contentImage from '../img/morning_coffee.jpg';

const HomePage = () => {
  return (
    <div style={{ marginTop: '160px' }}>
      <div className={cl.content}>
        <h1 className={cl.title}>START YOUR DAY WITH COFFEEHUB.</h1>
        <div style={{ marginBottom: '30px' }}>
          <img src={contentImage} alt="morning coffee" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
