import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '.././assests/css/styles.css';
// import 'swiper/swiper-bundle.min.css'; 
//import 'swiper/swiper.min.css';
//import 'swiper/components/navigation/navigation.min.css';
//import 'swiper/components/pagination/pagination.min.css';
// Correct CSS import path for Swiper v9+

// Import Swiper modules
// import { Navigation, Pagination } from 'swiper';

const Discover = () => {
  return (
    <section className="discover section" id="discover">
      <h2 className="section__title">Discover the most <br /> attractive places</h2>

      <div className="discover__container container">
        <Swiper
          // modules={[Navigation, Pagination]}  // Use modules here
          navigation
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          <SwiperSlide className="discover__card">
            <img src="skydiving8.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Bali</h2>
              <span className="discover__description">24 tours available</span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="discover__card">
            <img src="sky2.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Bora Bora</h2>
              <span className="discover__description">15 tours available</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="discover__card">
            <img src="home3.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">White Haven</h2>
              <span className="discover__description">15 tours available</span>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="discover__card">
            <img src="sky2.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Hyar</h2>
              <span className="discover__description">15 tours available</span>
            </div>
          </SwiperSlide> */}
          <SwiperSlide className="discover__card">
            <img src="hiking4.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Hawaii</h2>
              <span className="discover__description">15 tours available</span>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </section>
  );
}

export default Discover;