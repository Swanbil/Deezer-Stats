import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../style/NavBar.css";
import { FaUserCircle, FaHome, FaNewspaper } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import {BsFileEarmarkMusic} from "react-icons/bs";
import {BiUserVoice} from "react-icons/bi";
import {MdAlbum} from "react-icons/md";

export default class NaviguateBar extends React.Component {

    render() {
        var logo = require('../assets/LogoNavBar.png');
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand><Link className="brand" to="/"><img className="logo" src={logo}></img></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link className="link" to="/"><FaHome className="mx-2" />Home</Link></Nav.Link>
                                <Nav.Link><Link className="link" to="/feed"><FaNewspaper className="mx-2" />Feed</Link></Nav.Link>
                                <NavDropdown title={<span className="link"><IoStatsChart className="mx-2" />Stats</span>} id="navbarScrollingDropdown">
                                    <NavDropdown.Item><Link to="/stats/tracks" className="sublink"><BsFileEarmarkMusic className="mx-2"color={"#70d987"} />Tracks ranking</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/stats" className="sublink"><BiUserVoice className="mx-2" color={"#70d987"}/>Artists ranking</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/stats" className="sublink"><MdAlbum className="mx-2" color={"#70d987"}/>Albums ranking</Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link>
                                    <button className="btn btn-success">
                                        <Link className="log mr-0 text-decoration-none text-light" to="/login">
                                            <FaUserCircle className="mx-2" />Login
                                        </Link>
                                    </button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}