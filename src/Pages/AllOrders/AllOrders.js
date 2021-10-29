import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './AllOrders.css'

const AllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <Container>
            <h2 className="manage-order-font text-primary font">This is the orders, what we collected</h2>
            <hr />
            <div className="font manage-all-orders">


                {
                    orders.map(order => <div>
                        <div>
                            <h3>{order.name}</h3>
                            <p>{order.email}</p>
                        </div>
                        <div>
                            <img src="" alt="" srcset="" />
                        </div>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default AllOrders;