import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth/useAuth';
import './Header.css'

const Header = () => {

    const { user } = useAuth()

    return (
        <div className="font header-comp">
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Navbar.Brand>
                        <img className="img-logo" src="https://i.ibb.co/pnGHgqT/logopng.webp" alt="" /></Navbar.Brand>
                    <Nav className="mx-5 nav-link justify-content-end ">
                        <Link to="/">Home</Link>
                        <Link to="/all-hotels"> All Hotels</Link>
                        <Link to="/dashboard"><i className="fas fa-user-shield"><span className="font">Dashboard</span></i></Link>

                        {
                            !user.email && <button className="register-btn "><Link to='./login'><i className="fas fa-user-plus text-color"></i><span className="font register-button">  Login</span></Link></button>
                        }

                        <button className="btn-danger logOut-btn"><i className="fas fa-sign-out-alt">Log out</i></button>


                        <Navbar.Text>
                            <span className="login-user-name"><b>Signed in as: {user.displayName}</b></span>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;