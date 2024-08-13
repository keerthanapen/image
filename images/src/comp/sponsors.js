import React from 'react';

import '.././assests/css/styles.css';
const Sponsors = () => {
  return (
    <section className="sponsors section">
      <div className="sponsors__container container grid">
        <div className="sponsors__content">
          <img src="assets/img/sponsor1.png" alt="" className="sponsors__img" />
        </div>

        <div className="sponsors__content">
          <img src="assets/img/sponsor2.png" alt="" className="sponsors__img" />
        </div>

        <div className="sponsors__content">
          <img src="assets/img/sponsor3.png" alt="" className="sponsors__img" />
        </div>

        <div className="sponsors__content">
          <img src="assets/img/sponsor4.png" alt="" className="sponsors__img" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
