import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../style/NavBar.css";
import { FaUserCircle, FaHome, FaNewspaper } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import { BsFileEarmarkMusic } from "react-icons/bs";
import {ImStatsBars2} from "react-icons/im";
import { BiUserVoice } from "react-icons/bi";
import { MdAlbum } from "react-icons/md";
import axios from "axios";

export default class NaviguateBar extends React.Component {
    constructor(props) {
        super(props);
    }
    async login() {
        const res = await axios.get('/login');
        window.location.href = res.data;
    }
    async logout() {
        const res = await axios.get('/logout');
        console.log("Logout"); 
        localStorage.removeItem('token');
        this.onTrigger();
        window.location.href = res.data;
    }
    onTrigger = () => {
        this.props.logCallback(false);
    }

    render() {
        //var logo = require('../assets/logo_black.png');
        var btn;
        if(!this.props.isLog){
            btn = (<button className="btn btn-success" onClick={this.login.bind(this)}>
            <FaUserCircle className="mx-2" />Login
        </button>)
        }
        else{
            btn = (<button className="btn btn-danger" onClick={this.logout.bind(this)}>
            <FaUserCircle className="mx-2" />Logout
        </button>)
        }
        
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand className="logo">
                            <Link className="brand" to="/" >
                                <div style={{display:"flex",alignItems:"center", fontWeight:"bold", color:"rgb(142 219 159)"}}><ImStatsBars2 className="mx-2"></ImStatsBars2>DeezerStats</div>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link className="link" to="/"><FaHome className="mx-2" />Home</Link></Nav.Link>
                                <Nav.Link><Link className="link" to="/feed"><FaNewspaper className="mx-2" />Feed</Link></Nav.Link>
                                <NavDropdown title={<span className="link"><IoStatsChart className="mx-2" />Stats</span>} id="navbarScrollingDropdown">
                                    <NavDropdown.Item><Link to="/stats/tracks" className="sublink"><BsFileEarmarkMusic className="mx-2" color={"#70d987"} />Tracks ranking</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/stats/artists" className="sublink"><BiUserVoice className="mx-2" color={"#70d987"} />Artists ranking</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/stats/albums" className="sublink"><MdAlbum className="mx-2" color={"#70d987"} />Albums ranking</Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link>{btn}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}