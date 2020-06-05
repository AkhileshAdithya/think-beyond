import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component{
    render() {
        return (
            <div className="Footer">
               <Container>
                   <Row>
                        <Col className="d-flex justify-content-center">
                            <h4 className="Footer-text">
                                Think beyond...
                            </h4>
                        </Col>
                   </Row>
                   <Row>
                        <Col className="d-flex justify-content-center">
                            <p className="Footer-text">
                                © 2020 Web App
                            </p>
                        </Col>
                   </Row>
                   <Row>
                        <Col className="d-flex justify-content-center">
                            <p>
                                <a rel="noopener noreferrer" href="https://www.instagram.com/thinkbeyond_rocket_club/" target="_blank"><FontAwesomeIcon className="Footer-icon" icon = {faInstagram} /></a>
                                <a rel="noopener noreferrer" href="https://wa.me/919686593948" target="_blank"><FontAwesomeIcon className="Footer-icon" icon = {faWhatsapp} /></a>
                                <a rel="noopener noreferrer" href="mailto:hbphaneesh@gmail.com" target="_blank"><FontAwesomeIcon className="Footer-icon" icon = {faEnvelope} /></a>
                                <a rel="noopener noreferrer" href="tel:+919686593948" target="_blank"><FontAwesomeIcon className="Footer-icon" icon = {faPhone} /></a>
                          </p>
                        </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}

export default Footer