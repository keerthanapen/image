import React from 'react';
import '.././assests/css/styles.css';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience Unique Adventures</h2>
      <div className="experience__container container grid">
        <div className="experience__content grid">
          <div className="experience__data">
            <h2 className="experience__title">Guided Hiking Tours</h2>
            <p className="experience__description">
              Join our guided tours and explore scenic trails with expert guides.
            </p>
          </div>
          <img src="hiking2.jpg" alt="" className="experience__img" />
        </div>

        <div className="experience__content grid">
          <div className="experience__data">
            <h2 className="experience__title">Extreme Skiing Adventures</h2>
            <p className="experience__description">
              Experience the thrill of extreme skiing in the most challenging terrains.
            </p>
          </div>
          <img src="skydiving2.jpg" alt="" className="experience__img" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
