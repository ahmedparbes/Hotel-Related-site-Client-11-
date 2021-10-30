import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container>
            <div className="about-section font">
                <div className="img-half">
                    <img src="https://i.ibb.co/Xt1Wmjn/xabout-png-pagespeed-ic-Zsrvw-BYE3-S.webp" alt="" />
                </div>
                <div className="half-info">
                    <p className="about-txt">About us</p>
                    <h2>Get ready for real time adventure</h2>
                    <p>Let’s start your journey with us, your dream will come true. Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                    <button className="btn-primary">Book Destination</button>
                </div>

            </div>
        </Container>
    );
};

export default About;