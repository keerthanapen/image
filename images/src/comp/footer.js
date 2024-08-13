import React from 'react';
import '../assests/css/styles.css'; // Adjusted import path

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">Travel</h3>
                        <p className="footer__description">
                            Travel you choose the <br /> destination, 
                            we offer you the <br /> experience.
                        </p>
                        <div>
                            <a href="https://www.facebook.com/" target="blank" rel="noopener noreferrer" className="footer_social">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://twitter.com/" target="blank" rel="noopener noreferrer" className="footer_social">
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="blank" rel="noopener noreferrer" className="footer_social">
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a href="https://www.youtube.com/" target="blank" rel="noopener noreferrer" className="footer_social">
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">About</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Features</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">News & Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">Team</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Plan & Pricing</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Become a Member</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">FAQs</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Support Center</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; 2021 Bedimcode. All rights reserved.</p>
                    <div className="footer__terms">
                        <a href="#" className="footer__terms-link">Terms & Agreements</a>
                        <a href="#" className="footer__terms-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;