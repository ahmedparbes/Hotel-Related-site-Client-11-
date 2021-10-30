import React from 'react';
import { Container } from 'react-bootstrap';
import './Features.css'

const Features = () => {
    return (
        <Container>
            <h2 className="text-primary h2-width font">Why Choose us</h2>
            <hr />
            <div className="font features-container">
                <div className="section-container">
                    <div className="half-width">
                        <h4>Best Price Guarantee</h4>
                        <p>Buy at a lower Price.</p>
                    </div>
                    <div className="half-image">
                        <img src="https://i.ibb.co/c1Wqq6m/ico-piggy-bank.png" alt="" />
                    </div>
                </div>
                <div className="section-container">
                    <div className="half-width">
                        <h4>Trust & Safety</h4>
                        <p>Buy at a lower Price.</p>
                    </div>
                    <div className="half-image">
                        <img src="https://i.ibb.co/HX8qW3W/ico-insurance.png" alt="" />
                    </div>
                </div>
                <div className="section-container">
                    <div className="half-width">
                        <h4>20,000+ properties</h4>
                        <p>Buy at a lower Price.</p>
                    </div>
                    <div className="half-image">
                        <img src="https://i.ibb.co/tsSh6hW/ico-eath.png" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Features;