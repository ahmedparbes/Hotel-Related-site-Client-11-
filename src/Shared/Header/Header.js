import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div className="font header-comp">
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Navbar.Brand>
                        <img className="img-logo" src="https://i.ibb.co/pnGHgqT/logopng.webp" alt="" /></Navbar.Brand>
                    <Nav className="mx-5 nav-link justify-content-end ">
                        <Link to="/">Home</Link>
                        <Link to="/all-hotels"> All Hotels</Link>
                        <Link to="/hotel"> Add Hotel</Link>
                        {/* <Link to="/admin"><i class="fas fa-user-shield"><span className="font"> Admin</span></i></Link> */}

                        <button className="register-btn "><Link to='./register'><i class="fas fa-user-plus text-color"></i><span className="font register-button">  Register</span></Link></button>

                        {/* <button className="btn-danger logOut-btn"><i class="fas fa-sign-out-alt">Log out</i></button>
 */}

                        <Navbar.Text>
                            <span classNam="login-user-name"><b>Signed in as:</b></span>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;