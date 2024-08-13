import React from 'react';
import '.././assests/css/styles.css';
const Home = () => {
    return (
        <section className="home" id="home">
            
            {/* Replace the image with a video element */}
            <video autoPlay loop muted className="home__video">
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__data-subtitle">Discover your next adventure</span>
                    <h1 className="home__data-title">Explore The <br /> Best <b>Sports Trails</b></h1>
                    <a href="#" className="button">Explore</a>
                </div>

                <div className="home__social">
                    <a href="https://www.facebook.com/" target="_blank" className="home_social-link">
                        <i className="ri-facebook-box-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="home_social-link">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="home_social-link">
                        <i className="ri-twitter-fill"></i>
                    </a>
                </div>

                <div className="home__info">
                    <div>
                        <span className="home__info-title"></span>
                        <a href="#" className="button button--flex button--link home__info-button">
                    <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="home__info-overlay">
                        <img src="assets/img/hiking2.jpg" alt="" className="home__info-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
