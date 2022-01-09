import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../style/NavBar.css"
export default class NaviguateBar extends React.Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand><Link className="brand" to="/">DeezerStats</Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link><Link className="link" to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/login">Login</Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}