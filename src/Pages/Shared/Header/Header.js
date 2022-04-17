import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className='text-info fs-4' href="#home">Doctor Room</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav >
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="/">Home</Link>
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="about">About Us</Link>
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="booking">Serial Booking</Link>
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="blog">Blog</Link>
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="login">LogIn</Link>
                    <Link className='text-decoration-none ms-4 text-info fs-5' to="signup">SignUp</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;