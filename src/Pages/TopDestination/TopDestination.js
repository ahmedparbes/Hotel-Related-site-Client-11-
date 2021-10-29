import React from 'react';
import { Container } from 'react-bootstrap';
import './TopDestination.css'

const TopDestination = () => {
    return (
        <Container>
            <h2 className="font destination-title">Top Destinations</h2>
            <div className="font destination-container ">

                <div className="post-container">
                    <img src="https://i.ibb.co/chVs36C/bg-1.jpg" alt="Avatar" className="image" />
                    <h4>Virginia</h4>
                    <p>20 properties</p>
                </div>
                <div className="post-container">
                    <img src="https://i.ibb.co/Qn7WTFy/bg-2.jpg" alt="Avatar" className="image" />
                    <h4>San Francisco</h4>
                    <p>20 properties</p>
                </div>
                <div className="post-container">
                    <img src="https://i.ibb.co/3Yk2H4z/cheapest-car-insurance-in-new-jersey-nj-story-370x370.jpg" alt="Avatar" className="image" />
                    <h4>New Jersey</h4>
                    <p>13 properties</p>
                </div>
                <div className="post-container">
                    <img src="https://i.ibb.co/cbTF2Rb/bg-4.jpg" alt="Avatar" className="image" />
                    <h4>Nevada</h4>
                    <p>20 properties</p>
                </div>
                <div className="post-container">
                    <img src="https://i.ibb.co/3SCvpXf/bg-5.jpg" alt="Avatar" className="image" />
                    <h4>Los Angeles</h4>
                    <p>12 properties</p>
                </div>
                <div className="post-container">
                    <img src="https://i.ibb.co/WBdNvb6/bg-6.jpg" alt="Avatar" className="image" />
                    <h4>California</h4>
                    <p>17 properties</p>
                </div>
            </div>
        </Container>
    );
};

export default TopDestination;