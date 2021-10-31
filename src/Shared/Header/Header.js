import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth/useAuth';
import './Header.css'

const Header = () => {

    const { user, logOutGoogle } = useAuth()

    return (
        <div className="font">
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Link to="/"><img src="https://i.ibb.co/pnGHgqT/logopng.webp" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="px-7 nav-link">
                            <Link to="/">Home</Link>
                            <Link to="/all-hotels"> All Hotels</Link>
                            <Link to="/about">About</Link>
                            {
                                !user.email && <div className="py-1 my-1">
                                    <button className="btn-danger login-btn ">
                                        <Link to="/login"><i className="fas fa-sign-in-alt"><span className="font login-btn"> Login</span></i></Link></button>
                                </div>
                            }
                            {
                                user.email && <Link to="/dashboard"><i className="fas fa-user-shield"><span className="font">Dashboard</span></i></Link>
                            }
                            <br />
                            {
                                user.email &&
                                <button onClick={logOutGoogle} className="btn-warning  "><i className="fa fa-sign-out" aria-hidden="true"><span className="font mx-1"> Logout</span></i></button>
                            }


                            {
                                user.email && <p className="user-name" ><i className=" fas fa-user-tie"><span className="font ">  {user.displayName}</span></i></p>
                            }

                        </Nav>
                        <Navbar.Text>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar >


        </div>
        // <div className="font header-comp">
        //     <Navbar collapseOnSelect expand="lg" className="nav-bar">
        //         <Container>
        //             <Navbar.Brand>
        //                 <Link to='/'> <img className="img-logo" src="https://i.ibb.co/pnGHgqT/logopng.webp" alt="" /></Link></Navbar.Brand>
        //             <Nav className="mx-5 nav-link justify-content-end ">
        //                 <Link to="/">Home</Link>
        //                 <Link to="/all-hotels"> All Hotels</Link>
        //                 {
        //                     user.email && <Link to="/dashboard"><i className="fas fa-user-shield"><span className="font">Dashboard</span></i></Link>
        //                 }

        //                 {
        //                     !user.email && <button className="register-btn "><Link to='./login'><i className="fas fa-user-plus text-color"></i><span className="font register-button">  Login</span></Link></button>
        //                 }

        //                 {
        //                     user.email && <button onClick={logOutGoogle} className="btn-danger logOut-btn"><i className="fas fa-sign-out-alt">Log out</i></button>
        //                 }


        //                 <Navbar.Text>
        //                     {
        //                         user.email && <span className="login-user-name"><b>Signed in as: {user.displayName}</b></span>
        //                     }
        //                 </Navbar.Text>
        //             </Nav>
        //         </Container>
        //     </Navbar>
        // </div >
    );
};

export default Header;