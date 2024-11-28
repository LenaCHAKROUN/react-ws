import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNav = () => {
return (
    <div>
        <Navbar bg="black" data-bs-theme="dark" style={{color:"white"}}>
            <Container>
            <Navbar.Brand href="#home">MyBooking.com</Navbar.Brand>
            <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Rooms</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
)
}

export default MyNav