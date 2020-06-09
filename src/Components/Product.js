import React, { Component } from 'react'
import './Product.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Product extends Component{
    static defaultProps = {
        imgSrc : "/Images/coding.png",
        name : "Name",
        desc : "Animi dignissimos et aut accusantium officia. Impedit iste est debitis et tempore. Aliquid enim ad corrupti earum omnis fuga.Sint voluptatum aliquid aut illo nemo officia quod. Sit architecto repudiandae velit. Dolores aut saepe nesciunt ab magnam. Vel sed officia qui aut eum. Sint eius numquam ut nihil ut. Impedit incidunt dolorem maxime facilis explicabo.Laborum repellendus quasi sequi architecto. Sint aut dolores labore odit. Nihil autem nihil sed aut qui ipsam omnis. Ipsam amet voluptatem rerum labore fugit similique eaque voluptatem.Perferendis similique natus quas suscipit et. Velit atque eligendi qui consequatur dolores sunt mollitia voluptatibus. Voluptas non ab nulla recusandae soluta rerum. Iusto ea ducimus et. Mollitia similique alias non. Totam itaque dolor molestiae et quo minus dolor illo.Et consequatur nesciunt blanditiis soluta. Dolores qui dolor autem ea enim ipsum quos cum. Quis autem ex sit temporibus sit rerum voluptas necessitatibus.",
        cost : "768",
    }
    clickHandler = (e) => {
            console.log(e , "clicked")
        }
    render() {        
        return (
            <div>
                <Container>
                    <Row className="Product">
                        <Col xs={12} sm={5} className="d-flex align-self-center justify-content-center">
                            <img src={this.props.imgSrc} alt={this.props.name} />
                        </Col>
                        <Col xs={12} sm={7} className="d-flex align-self-center justify-content-center">
                            <Row>
                                <Col xs={12} className="d-flex align-self-center Product-name">
                                    {this.props.name}
                                </Col>
                                <Col xs={12} className="d-flex align-self-center Product-cost">
                                    ₹{this.props.cost}
                                </Col>
                                <Col xs={12} className="d-flex align-self-center justify-content-center Product-desc">
                                    {this.props.desc}
                                </Col>    
                                <Col xs={12} className="d-flex align-self-center justify-content-center Product-button">
                                    <Button onClick={this.clickHandler}><span className="Product-buttonText">Pay ₹{this.props.cost}</span></Button>
                                </Col>                            
                            </Row>
                        </Col>
                    </Row> 
                </Container>
            </div>
        )
    }
}

export default Product