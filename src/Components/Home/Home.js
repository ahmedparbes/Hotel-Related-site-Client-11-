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

                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                        {/* <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button> */}
                        <img src="https://i.ibb.co/xGx96kq/xcar-png-pagespeed-ic-RMwq-CTkt-Un.webp" alt="" />
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
        </div >


    );
};

export default Home;