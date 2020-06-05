import React, { Component } from 'react'
import './Contact.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Contact extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    onClickWhatsapp = () => {
        window.open("https://wa.me/919686593948")
    }
    onClickTel = () => {
        window.open("tel:+91 9686593948")
    }
    render() {
        return (
            <div className="Contact">
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div className="Contact-title">Contact Us</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center Contact-row" xs={12} sm={7}>
                            <div className="Contact-text">Call us at :+91 9686593948</div>
                        </Col>
                        <Col className="d-flex justify-content-center Contact-row" xs={12} sm={5}>
                            <Button onClick={this.onClickTel}>Call Us</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center Contact-row" xs={12} sm={7}>
                            Whatsapp us at: +91 9686593948
                        </Col>
                        <Col className="d-flex justify-content-center Contact-row" xs={12} sm={5}>
                            <Button onClick={this.onClickWhatsapp}>Whatsapp Us</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center Contact-row">
                            <span>Visit us at : 195/A 17th main 13th cross Saraswathipuram mysore, Mysore, Karnataka 570009</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center Contact-row1">
                                <a rel="noopener roreferrer" href="https://www.google.com/maps/dir//Think+beyond/@12.298452,76.5567247,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3baf7b055190546f:0x3f660aa124ce9f8d!2m2!1d76.6267652!2d12.2984609"><img className="Contact-map" src="https://maps.googleapis.com/maps/api/staticmap?scale=1&amp;size=1600x900&amp;style=feature:poi.business|visibility:off&amp;style=feature:water|visibility:simplified&amp;style=feature:road|element:labels.icon|visibility:off&amp;style=feature:road.highway|element:labels|saturation:-90|lightness:25&amp;format=jpg&amp;language=en-GB&amp;region=IN&amp;markers=color:0xddaa44|12.2984609,76.6267652&amp;zoom=16&amp;client=google-presto&amp;signature=v582GQ_kssR1n7RMAo24zPFEWTI" alt="img" /></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center Contact-row">
                            <p>
                                <h4 className="d-flex justify-content-center">Opening Hours</h4><br />
                                Mon:	11:00 am – 11:00 pm<br />
                                Tue:	11:00 am – 11:00 pm<br />
                                Wed:	11:00 am – 11:00 pm<br />
                                Thu:	11:00 am – 11:00 pm<br />
                                Fri:	11:00 am – 11:00 pm<br />
                                Sat:	11:00 am – 11:00 pm<br />
                                Sun:	11:00 am – 11:00 pm<br />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Contact