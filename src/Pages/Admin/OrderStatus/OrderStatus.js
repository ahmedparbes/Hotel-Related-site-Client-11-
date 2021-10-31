import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './OrderStatus.css'

const OrderStatus = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://aqueous-tundra-43046.herokuapp.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    // Update User
    const handleStatusChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, note: user.note };
        setUser(updatedUser);
    }

    const handleNoteChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, note: updatedEmail }
        setUser(updatedUser);
    }
    const handleUpdateUser = e => {
        const url = `https://aqueous-tundra-43046.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setUser({});

                    e.target.reset();


                }
            })
        e.preventDefault();
    }

    return (
        <Container>
            <div className="font">
                <h2>Type <span className="text-primary">Approve</span> for approve this Order</h2>
                <form onSubmit={handleUpdateUser}>
                    <input type="text" onChange={handleStatusChange} defaultValue={user.status || ''} />
                    <input type="text" onChange={handleNoteChange} defaultValue={user.note || ''} />

                    <input type="submit" value="Update" />
                </form>
            </div>
        </Container>
    );
};

export default OrderStatus;