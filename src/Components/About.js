import React, { Component } from 'react'
import './About.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image1 from './../Images/Gallery/image-004n.jpeg'
// import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


class About extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="About">
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center About-titleText About-top">
                            <div>What is Think beyond... ? </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text About-textTop">
                            <p>Think beyond... is an educative cell founded by young enthusiasts and innovators that seek to revolutionize the concept of learning from old-fashioned learning to sustained development.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text">
                            <p>We here at Think beyond make learning fun, innvovative and academic at the same time.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text">
                            <p>We plan to change the system of learning by introducing practical learning, tinkering, designing and challenge based learning which will revolutionize the way we see education.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text About-textBottom">
                            <p>Your kids will learn to think out of the box as well as understand academic concepts way better</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-titleText About-textTop">
                            Our Team
                        </Col>
                    </Row>
                    <Row className="About-profile">
                        <Col xs={12} sm={3}  className="d-flex justify-content-center About-textTop About-textBottom" >
                            <Image src={image1} roundedCircle className="About-picture" />
                        </Col>
                        <Col xs={12} sm={9}  className="d-flex justify-content-center align-self-center About-textTop About-textBottom About-text">
                            <p>
                            <h2>Phaneesh HB</h2>
                            I'm a tinkerer and a content developer ...being a hobbyist by nature, I founded this educational haven ..to engage and enhance students practically and innovatively.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-titleText About-textTop">
                            Innovative Labs in Schools
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text About-textTop">
                            <p>We set up innovative labs in schools...</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text">
                            <p>Include our Program in your school,</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text">
                            <p>To unlock innovation in your kids and,</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text About-textBottom">
                            <p>tutoring and hands on learning in academia</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text About-textBottom">
                            Contact us to know more...
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-titleText About-textTop">
                            Our Challenges
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center About-text About-textTop">
                            <p>We regularly put up challenges like</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} sm={5}></Col>
                        <Col className="d-flex justify-content-start About-text About-textTop" xs={10} sm={7}>
                            <p><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>Egg drop challenge</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} sm={5}></Col>
                        <Col className="d-flex justify-content-start About-text" xs={10} sm={7}>
                            <p><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>Zombie Apocalypse Challenge</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} sm={5}></Col>
                        <Col className="d-flex justify-content-start About-text About-textBottom" xs={10} sm={7}>
                            <p><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>And More...</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About