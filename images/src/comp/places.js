import React from 'react';
import '.././assests/css/styles.css';

const Places = () => {
  return (
    <section className="place section" id="place">
      <h2 className="section__title">Explore Popular Destinations</h2>
      <div className="place__container container grid">
        <div className="place__card">
          <img src="road.jpg" alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number"></span>
            </span>
            <div className="place__data">
              <h3 className="place__title">Rocky Mountain</h3>
              <span className="place__subtitle">Colorado, USA</span>
              <span className="place__price">$450</span>
            </div>
          </div>
        </div>

        <div className="place__card">
          <img src="skydiving.jpg" alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number"></span>
            </span>
            <div className="place__data">
              <h3 className="place__title">Alps Mountain</h3>
              <span className="place__subtitle">France, Europe</span>
              <span className="place__price">$600</span>
            </div>
          </div>
        </div>

        <div className="place__card">
          <img src="sky2.jpg" alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number"></span>
            </span>
            <div className="place__data">
              <h3 className="place__title">Gold Coast</h3>
              <span className="place__subtitle">Australia</span>
              <span className="place__price">$500</span>
            </div>
          </div>
        </div>

        <div className="place__card">
          <img src="sky3.jpg" alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number"></span>
            </span>
            <div className="place__data">
              <h3 className="place__title">Whistler Mountain</h3>
              <span className="place__subtitle">Canada</span>
              <span className="place__price">$550</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;
