import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import './Navbar.css'

class MyNavbar extends Component{
    render() {
        return (
                <Navbar fixed="top" className="Navbar" >
                        <Nav className="mr-auto">
                            <LinkContainer exact to="/"><Nav.Link>Think Beyond</Nav.Link></LinkContainer>
                        </Nav>
                        <Nav className="ml-auto">
                            <LinkContainer exact to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                            <LinkContainer exact to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                            <LinkContainer exact to="/shop"><Nav.Link>Shop</Nav.Link></LinkContainer>
                        </Nav>
                </Navbar>
        )
    }
}

export default MyNavbar