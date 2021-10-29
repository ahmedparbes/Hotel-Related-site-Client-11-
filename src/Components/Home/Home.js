import React from 'react';
import { Container } from 'react-bootstrap';
import HotelDetails from '../../Pages/HotelDetails/HotelDetails';
import Subscribe from '../../Pages/Subscribe/Subscribe';
import Features from './Features/Features';
import './Home.css'

const Home = () => {
    return (

        <div>
            <div className="font home-section">
                <h2>Find Your Perfect Hotels</h2>
                <p>Get the best prices on 20,000+ properties</p>

                <div class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="features-margin">
                <Features></Features>
            </div>
            <HotelDetails></HotelDetails>
            <div>
                <Subscribe></Subscribe>
            </div>
        </div>


    );
};

export default Home;