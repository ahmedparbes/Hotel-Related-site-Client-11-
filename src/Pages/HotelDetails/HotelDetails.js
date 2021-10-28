import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './HotelDetails.css'

const HotelDetails = () => {

    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    return (
        <Container>
            <div className="font last-deal">
                <h2>Last Minute Deals</h2>
            </div>
            <div className="font hotel-details">
                {
                    hotels.map(hotel => <div className="single-details">
                        <img src={hotel.img} alt="" />
                        <div>
                            <h4>{hotel.name}</h4>
                            <p>{hotel.location}</p>
                            <p>{hotel.price}</p>
                        </div>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default HotelDetails;

{/* <div className="single-details">
<img src={hotel.img} alt="" />
<div>
    <h4>{hotel.name}</h4>
    <p>{hotel.location}</p>
    <p>{hotel.price}</p>
</div>
</div> */}