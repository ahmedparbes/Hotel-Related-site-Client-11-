import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './AllOrders.css'

const AllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <Container>
            <h2 className="manage-order-font text-primary font">This is the orders, what we collected</h2>
            <hr />
            <div className="font manage-all-orders">


                {
                    orders.map(order => <div className="table">
                        <table
                            key={order._id}
                            className="font" id="customers" >
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Status</th>

                            </tr>
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order._id}</td>
                                <td>{order.productName}</td>
                                <td><button><i class="fa fa-clock-o" aria-hidden="true"> Pending</i></button></td>
                            </tr>

                        </table>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default AllOrders;