import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './OrderStatus.css'

const OrderStatus = () => {

    const { id } = useParams();

    const [status, setStatus] = useState({});

    const url = `https://aqueous-tundra-43046.herokuapp.com/users/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setStatus(data))



    const handleStatus = e => {

        const nameValue = e.target.value;
        const updateName = { note: status.note, name: nameValue }
        setStatus(updateName)

    }

    const handleNote = e => {

        const noteValue = e.target.value;
        const updateNote = { name: status.status, note: noteValue };
        setStatus(updateNote)

    }

    const handleForm = e => {
        e.preventDefault();
        const url = `https://aqueous-tundra-43046.herokuapp.com/users/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Order Status was updated");
                    e.target.reset();

                }
            })


    };




    return (
        <Container>
            <div className="font status-section">
                <h2>Type <span className="text-primary">Approve</span> for Approve this Pending Status</h2>
                <hr />
                <form onSubmit={handleForm}>
                    <label> Status</label>
                    <input onChange={handleStatus} type="text" id="fname" name="firstname" placeholder=" Product Status.." value={status.status || ''} />
                    <label>Note</label>
                    <input onChange={handleNote} type="text" id="fname" name="firstname" placeholder=" Product Note.." value={status.note || ''} />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </Container>
    );
};

export default OrderStatus;