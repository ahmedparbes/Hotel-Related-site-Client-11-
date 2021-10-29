import React from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopDestination from '../TopDestination/TopDestination';
import './HotelDetails.css'

const HotelDetails = () => {


    const [hoteels, setHotel] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotel(data))
    }, []);

    return (
        <Container>
            <div className="font last-deal">
                <h2>Last Minute Deals</h2>
            </div>
            <div className="font hotel-details">
                {
                    hoteels.map(hotel => <div className="single-details">
                        <img src={hotel.img} alt="" />
                        <div>
                            <h4>{hotel.name}</h4>
                            <p>{hotel.location}</p>
                            <p>{hotel.price}</p>
                            <Link to={`/book/${hotel?._id}`} > <button className=" book-button btn-primary">Book Now</button></Link>
                        </div>
                        <div>

                        </div>
                    </div>
                    )
                }
            </div>
            <TopDestination></TopDestination>
        </Container >
    );
};

export default HotelDetails;