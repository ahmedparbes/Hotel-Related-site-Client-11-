import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Context/useAuth/useAuth';
import './BookService.css'

const BookService = () => {
    const { id } = useParams();
    const { user } = useAuth()
    const history = useHistory();
    const redirect = '/my-order';

    const nameRef = useRef();
    const emailRef = useRef();
    const desRef = useRef();
    const number = useRef();
    const productIdRef = useRef()
    const productNameRef = useRef();
    const DefaultStatus = useRef();
    const NoteStatus = useRef();

    const [data, setData] = useState({});
    const url = `https://aqueous-tundra-43046.herokuapp.com/hotels/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const handlehtmlForm = e => {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const addre_ss = desRef.current.value;
        const phone = number.current.value;
        const p_name = productNameRef.current.value;
        const p_id = productIdRef.current.value;
        const d_status = DefaultStatus.current.value;
        const no_te = NoteStatus.current.value;

        const Newuser = { id: p_id, name: name, email: email, address: addre_ss, number: phone, productName: p_name, status: d_status, note: no_te }

        fetch('https://aqueous-tundra-43046.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Newuser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your order.');

                }
                e.target.reset()
                history.push(redirect);

            })


        e.preventDefault()
    }


    return (
        <Container>
            <div className="font register-volunteer">
                <h2 className="text-primary">Fill this form to procced.</h2>
                <form onSubmit={handlehtmlForm}>
                    <legend className="legend-text">User Name</legend>
                    <input ref={nameRef} type="text" required placeholder="Full name" value={user.displayName} />
                    <legend className="legend-text">User Email</legend>
                    <input ref={emailRef} type="text" required placeholder="Type email or username" value={user.email} />
                    <legend className="legend-text">Product id</legend>
                    <input ref={productIdRef} required type="text" id="lname" name="lastname" placeholder="" value={id} />
                    <legend className="legend-text">Product Name</legend>
                    <input ref={productNameRef} required type="text" id="lname" name="lastname" placeholder="" value={data.name} />
                    <legend className="legend-text">Address</legend>
                    <input ref={desRef} required type="text" id="lname" name="lastname" placeholder="Address .ex: village, city etc" />
                    <legend className="legend-text">Phone number</legend>
                    <input ref={number} required type="text" id="lname" name="lastname" placeholder="your phone number" />
                    <legend className="legend-text">Default Status</legend>
                    <input ref={DefaultStatus} required type="text" id="lname" name="lastname" value="Pending" />
                    <legend className="legend-text">Enter Note</legend>
                    <input ref={NoteStatus} required type="text" id="lname" name="lastname" placeholder="Enter a note" />
                    <input type="submit" value="Place Order" />
                </form>
            </div>
        </Container>
    );
};

export default BookService;