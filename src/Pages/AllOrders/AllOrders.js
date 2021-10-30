import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './AllOrders.css'

const AllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-tundra-43046.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
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
                        const remain = orders.filter(order => order._id !== id)
                        setOrders(remain);
                    }

                })
        }


    }



    return (
        <Container>
            <h2 className="manage-order-font text-primary font">This is the orders, what we collected</h2>
            <hr />
            <div className="font manage-all-orders">


                {
                    orders.map(order =>
                        <div className="table">
                            <table
                                key={order._id}
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
                                    <td>{order.email}</td>
                                    <td>{order._id}</td>
                                    <td>{order.productName}</td>
                                    <td><button onClick={() => cancelOrder(order._id)}><i className="fas fa-trash-alt"> cancel order</i></button></td>
                                </tr>

                            </table>
                        </div>)
                }
            </div>
        </Container>
    );
};

export default AllOrders;