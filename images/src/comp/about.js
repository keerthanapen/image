import React from 'react';
import '.././assests/css/styles.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section_title about_title">More Information <br /> About The Best Adventures</h2>
          <p className="about__description">
            Discover the thrill of outdoor adventures. Whether you're into hiking, skiing, surfing, or mountain biking, we offer the best spots and packages tailored for you.
          </p>
          <a href="#" className="button">Reserve an adventure</a>
        </div>

        <div className="about__img">
          <div className="about__img-overlay">
            <img src="bi.jpg" alt="" className="about__img-one" />
          </div>

          <div className="about__img-overlay">
            <img src="snow.jpg" alt="" className="about__img-two" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
