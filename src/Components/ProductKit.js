import React, { Component } from 'react'
import './Product.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import db from '../firebase.js'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'

class ProductKit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgSrc : "/Images/defaultKit.png",
            name : "Kit",
            desc : "One kit to rule them all, One kit to bind them. One kit to bring them all, and in the darkness bind them.",
            cost : "0",
            mount : false,
            modalShow : false
        }
    }

    onClickWhatsapp = () => {
        window.open("https://wa.me/919686593948")
    }
    onClickTel = () => {
        window.open("tel:+91 9686593948")
    }
    clickHandler = (e) => {
        this.setState({modalShow : true})
    }
    firestoreGet = () => {
        db.collection('kits').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.id === this.props.match.params.id){
                    this.setState({imgSrc : doc.data().imgSrc , name : doc.data().name , desc : doc.data().desc , cost : doc.data().cost})
                }
                console.log(doc)
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    componentDidMount(){
        this.firestoreGet()  
        this.setState({mount : true})     
    }
    render() {        
        return (
            <div className="Product">
                <Container>
                    <Row className="Product-row">
                        <Col xs={12} sm={5} className="d-flex align-self-center justify-content-center">
                            <Card>
                                <Card.Img src={this.state.imgSrc} alt={this.state.name} />
                            </Card>
                        </Col>
                        <Col xs={12} sm={7} className="d-flex align-self-center justify-content-center">
                            <Row>
                                <Col xs={12} className="d-flex align-self-center Product-name">
                                    {this.state.name}
                                </Col>
                                <Col xs={12} className="d-flex align-self-center Product-cost">
                                    ₹{this.state.cost}
                                </Col>
                                <Col xs={12} className="d-flex align-self-center justify-content-center Product-desc">
                                    {this.state.desc}
                                </Col>    
                                <Col xs={12} className="d-flex align-self-center justify-content-center Product-button">
                                    <Button onClick={this.clickHandler}><span className="Product-buttonText">Pay ₹{this.state.cost}</span></Button>
                                </Col>
                                <Modal size="lg" centered show={this.state.modalShow} onHide={() => this.setState({modalShow : false})}>
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Pay ₹{this.state.cost}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row>
                                                <Col xs={12} sm={12} md={6}>
                                                    <Row>
                                                        <Col className="d-flex justify-content-center">
                                                            Contact us
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="d-flex justify-content-center Product-modal" xs={12} sm={7}>
                                                            <div className="Contact-text">Call us at :+91 9686593948</div>
                                                        </Col>
                                                        <Col className="d-flex justify-content-center Product-modal" xs={12} sm={5}>
                                                            <Button onClick={this.onClickTel}>Call Us</Button>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="d-flex justify-content-center Product-modal" xs={12} sm={7}>
                                                            Whatsapp us at: +91 9686593948
                                                        </Col>
                                                        <Col className="d-flex justify-content-center Product-modal" xs={12} sm={5}>
                                                            <Button onClick={this.onClickWhatsapp}>Whatsapp Us</Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={12} sm={12} md={6}>
                                                    <Row>
                                                        <Col className="d-flex justify-content-center">
                                                            Gpay
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <Card.Img src="/Images/gpay.jpeg" alt="G-pay" />
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                </Modal>                      
                            </Row>
                        </Col>
                    </Row> 
                </Container>
            </div>
        )
    }
}

export default ProductKit