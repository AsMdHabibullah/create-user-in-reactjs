import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

class HeaderComponent extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="/">User-Create</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/user/login/user">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/user/login/admin">Admin</NavDropdown.Item>
                                <NavDropdown.Item href="/user/register">Register</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        );
    }
}


export default HeaderComponent;
