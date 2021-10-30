import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './MyOrder.css'

const MyOrder = () => {

    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-tundra-43046.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const cancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://aqueous-tundra-43046.herokuapp.com/users/${id}`
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


    }
    return (
        <Container>
            <h2 className="text-primary font">Your Order Summary</h2>
            <hr />
            <div className="font order-list">

                {
                    users.map(user => <div className="table">
                        <table
                            key={user._id}
                            className="font" id="customers" >
                            <tr>
                                {/* <th>Name</th> */}
                                <th>Email</th>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Action</th>

                            </tr>
                            <tr>
                                {/* <td>{user.name}</td> */}
                                <td>{user.email}</td>
                                <td>{user._id}</td>
                                <td>{user.productName}</td>
                                <td><button onClick={() => cancelOrder(user._id)}><i className="fas fa-trash-alt"> cancel order</i></button></td>
                            </tr>

                        </table>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default MyOrder;