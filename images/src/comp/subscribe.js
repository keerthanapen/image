import React from 'react';
import '.././assests/css/styles.css';

const Subscribe = () => {
  return (
    <section className="subscribe section">
      <div className="subscribe__container container">
        <h1 className="section__title">Subscribe to Get Special Offers</h1>
        <p className="subscribe__description">
          Join our mailing list to receive exclusive deals and latest news on outdoor adventures.
        </p>
        <form action="" className="subscribe__form">
          <input type="email" placeholder="Enter your email" className="subscribe__input" />
          <button className="button">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
