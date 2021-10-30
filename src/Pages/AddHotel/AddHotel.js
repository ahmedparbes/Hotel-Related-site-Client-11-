import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './AddHotel.css'

const AddHotel = () => {

    const nameRef = useRef();
    const locationRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();


    const handlehtmlForm = e => {
        e.preventDefault()
        const name = nameRef.current.value;
        const loc = locationRef.current.value;
        const imgs = imgRef.current.value;
        const pri_ce = priceRef.current.value;
        const newValunteer = { name: name, location: loc, price: pri_ce, img: imgs };

        fetch('https://aqueous-tundra-43046.herokuapp.com/hotels', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newValunteer)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Added Successfully.")
                }
                e.target.reset();

            });


    };


    return (
        <div className=" event-container font">
            <Container>
                <h2 className="h2-title text-danger">Add Hotel ...</h2>
                <hr />
                <br />
                <br />
                <form onSubmit={handlehtmlForm}>
                    <label className="label-text"><b>Hotel Name</b></label>
                    <input ref={nameRef} type="text" required placeholder="name" />
                    <label htmlFor="lname"><b>Location</b></label>
                    <input ref={locationRef} required type="text" id="lname" name="lastname" placeholder="Location.." />
                    <label htmlFor="lname"><b>Price</b></label>
                    <input ref={priceRef} required type="text" id="lname" name="lastname" placeholder="Price. eg: from €234,00/night" />
                    <label htmlFor="lname"><b>Image</b></label>
                    <input ref={imgRef} required type="text" id="lname" name="lastname" placeholder="Image Link.." />

                    <input type="submit" value="Submit" />
                </form>

            </Container>

        </div>
    );
};

export default AddHotel;