import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../style/NavBar.css";
import { FaUserCircle,FaHome,FaNewspaper } from 'react-icons/fa';
import {IoStatsChart } from 'react-icons/io5';

export default class NaviguateBar extends React.Component {

    render() {
        var logo = require('../assets/LogoNavBar.png');
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand><Link className="brand" to="/"><img className="logo" src={logo}></img></Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link><Link className="link" to="/"><FaHome className="mx-2"/>Home</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/feed"><FaNewspaper className="mx-2"/>Feed</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/stats"><IoStatsChart className="mx-2"/>Stats</Link></Nav.Link>
                        </Nav>
                        <Nav.Link>
                            <button className="btn btn-success">
                            <Link className="log mr-0 text-decoration-none text-light" to="/login">
                            <FaUserCircle className="mx-2"/>Login
                            </Link>
                            </button>
                        </Nav.Link>
                    </Container>
                </Navbar>
            </div>
        );
    }
}