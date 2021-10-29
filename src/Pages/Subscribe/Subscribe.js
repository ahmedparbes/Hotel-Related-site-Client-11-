import React from 'react';
import { Container } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <Container>
            <div className="font subscribe-container">
                <div className="subscrie-input">
                    <input type="text" placeholder="your email" />
                    <button>Subscribe</button>
                </div>
                <div className="subscribe-update-text">
                    <h4>
                        Get Updates & More
                    </h4>
                    <p>
                        Thoughtful thoughts to your inbox</p>
                </div>
                <div className="subscribe-image">
                    <img src="https://i.ibb.co/Ct5VzHg/ico-email-subscribe.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Subscribe;