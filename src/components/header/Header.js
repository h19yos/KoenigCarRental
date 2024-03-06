import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import './Header.css'
import { FaUserCircle } from "react-icons/fa";


const Header = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ "color": 'gold' }}>
                    Koenig
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/carslist">Cars list</NavLink>
                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                        <NavLink className="nav-link" to="/contacts">Contact Us</NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2 border-0 custom-button"><NavLink to="/login" style={{ textDecoration: 'none', color: '#FFFFFF8C' }}>Login</NavLink></Button>
                    <Button variant="outline-info" className="border-0 custom-button"><NavLink to="/register" style={{ textDecoration: 'none', color: '#FFFFFF8C' }}>Register</NavLink></Button>
                    <Button variant="outline-info" className="border-0 custom-button"><NavLink to="/profile" style={{ textDecoration: 'none', color: '#FFFFFF8C' }}><FaUserCircle /></NavLink></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
