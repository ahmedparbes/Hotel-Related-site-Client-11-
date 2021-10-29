import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './MyOrder.css'

const MyOrder = () => {

    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const cancelOrder = id => {

        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {

                    alert('Order cancel successfully')
                    const remain = users.filter(user => user._id !== id)
                    setUser(remain);
                }

            })
    }
    return (
        <Container>
            <div className="font order-list">
                {
                    users.map(user => <table
                        key={user._id}
                        className="font" id="customers" >
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => cancelOrder(user._id)}><i className="fas fa-trash-alt"> cancel order</i></button></td>
                        </tr>

                    </table>)
                }
            </div>
        </Container>
    );
};

export default MyOrder;