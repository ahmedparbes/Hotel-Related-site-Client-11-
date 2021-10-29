import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth/useAuth';
import './Admin.css'

const Admin = () => {
    const { user } = useAuth()
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-oasis-40762.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const handleDelete = id => {
        const url = `https://mysterious-oasis-40762.herokuapp.com/users/${id}`

        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Event is deleted Successfully')
                    const remain = users.filter(user => user._id !== id)
                    setUser(remain);
                }
            })

    }

    return (
        <Container>
            <div className="wrapper font">
                <div className="sidebar">
                    <ul className="siebar-nav">
                        {/* <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li> */}
                        <li><Link to="/hotel"><i className="fas fa-plus"></i>Add Hotel</Link></li>
                        <li><Link to="/my-order"><i className="fas fa-user"></i>My Order</Link></li>
                        <li><Link to="/register-user"><i className="fas fa-user"></i>Register List</Link></li>
                    </ul>
                </div>
                <div className="main_content">
                    <div className="header">Welcome!! <span className="text-primary">{user.displayName}</span>. Have a nice day.</div>
                    <div className="font admin-panel">

                        {

                            users.map(singleUser => <Container>
                                <div className="user-section">
                                    <div className="half-img">
                                        <img src={singleUser.img} alt="" />
                                    </div>
                                    <div className="half-width">

                                        <h6>{singleUser.description}</h6>
                                        <button onClick={() => handleDelete(singleUser._id)} className="cancel-btn">Cancel</button>
                                    </div>
                                </div>
                            </Container>)
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Admin;