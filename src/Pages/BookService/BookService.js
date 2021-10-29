import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../Context/useAuth/useAuth';
import './BookService.css'

const BookService = () => {
    const { user } = useAuth()
    const history = useHistory();
    const redirect = '/dashboard';

    const nameRef = useRef();
    const emailRef = useRef();
    const desRef = useRef();
    const number = useRef();
    const imgRef = useRef();

    const handlehtmlForm = e => {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const addre_ss = desRef.current.value;
        const phone = number.current.value;
        const image = imgRef.current.value;

        const Newuser = { name: name, email: email, address: addre_ss, number: phone, img: image }

        fetch('http://localhost:5000/users', {
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
                    <input ref={nameRef} type="text" required placeholder="Full name" value={user.displayName} />
                    <input ref={emailRef} type="text" required placeholder="Type email or username" value={user.email} />
                    <input ref={desRef} required type="text" id="lname" name="lastname" placeholder="Address .ex: village, city etc" />
                    <input ref={number} required type="text" id="lname" name="lastname" placeholder="your phone number" />
                    <input ref={imgRef} required type="text" id="lname" name="lastname" placeholder="Insert image link" />
                    <input type="submit" value="Place Order" />
                </form>
            </div>
        </Container>
    );
};

export default BookService;