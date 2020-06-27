import React, { Component } from 'react'
import './Home.css'
import './../Styles/vivify.min.css'
import Rocket from './../Images/Rocketn.png'
import webd from './../Images/webdn.png'
import robot from './../Images/robotn.png'
import mike from './../Images/miken.png'
import makerspace from './../Images/makerspacen.png'
import coding from './../Images/codingn.png'
import youtube from './../Images/youtuben.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import rocketlogo from './../Images/rocketlogon.png'
import lab from './../Images/labn.png'
import Carousel from 'react-bootstrap/Carousel'
import image2 from './../Images/Gallery/image-005n.jpeg'
import image3 from './../Images/Gallery/image-006n.jpeg'
import image4 from './../Images/Gallery/image-007n.jpeg'
import image1 from './../Images/Gallery/image-008n.jpeg'

class Home extends Component{
    state = {
        isMounted : false
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({isMounted : true})
    }
    render() {
        return (
            <div className="Home">
                <div className="Home-1">
                    <img src="/logo.jpeg" alt="logo" className="logo" />
                    <Container>
                            <Row className="Home-fullscreen">                                
                                <Col xs={12} sm={8} className="Home-text">
                                    <span className={"Home-thinkBeyond vivify fadeInRight"}>Think beyond...</span>
                                    <div className="Home-quote vivify fadeIn delay-1500">Where Imagination Meets Innovation</div>
                                    <div className="Home-DIY vivify fadeInRight delay-2000"><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>DIY</div>
                                    <div className="Home-robotics vivify fadeInRight delay-2500"><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>Robotics</div>
                                    <div className="Home-makerspace vivify fadeInRight delay-3000"><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>Makerspace</div>
                                    <div className="Home-entrepreneurship vivify fadeInRight delay-3500"><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>Entreprenuership</div>
                                    <div className="Home-rocketScience vivify fadeInRight delay-4000"><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>Rocket Science</div>
                                    <div className="Home-andMore vivify fadeInRight delay-4500"><i className="material-icons" style={{verticalAlign: -6 + 'px'}}>forward</i>and More</div>
                                </Col>
                                <Col xs={12} sm={4}  className="d-flex justify-content-center">
                                    <Image src={Rocket} className="Home-rocket " alt="" />
                                </Col>                            
                            </Row>
                            <Row className="">
                                <Col className="d-flex justify-content-center">
                                    <i className="material-icons Home-expandMore">expand_more</i>
                                </Col>
                            </Row>                   
                    </Container>
                </div>
                <div className="Home-2">
                    <Container>
                        <Row>
                            <Col className="d-flex justify-content-center Home-carousel">
                                <Carousel interval={2500} fade indicators={false}>
                                    <Carousel.Item className="Home-carousel">
                                        <img
                                        className="d-block carousel-image justify-content-center"
                                        src={image1}
                                        alt="image1"
                                        />
                                        <Carousel.Caption>
                                        <h3 className="shadowText">Ruben's Tube</h3>
                                        <p className="shadowText">A DIY musical fire table built by innovators and students alike ...One of the best science projects of all time </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block carousel-image justify-content-center"
                                        src={image2}
                                        alt="image2"
                                        />
                                        <Carousel.Caption>
                                        <h3 className="shadowText">Atal Tinkering fest Prize winners</h3>
                                        <p className="shadowText">Our team that won the Atal tinkering fest of the year 2019 held in karnataka</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block carousel-image justify-content-center"
                                        src={image3}
                                        alt="image3"
                                        />
                                        <Carousel.Caption>
                                        <h3 className="shadowText">Project Sea Bin</h3>
                                        <p className="shadowText">Winning project at Excel(Atal tinkering fest 2019). Environmental project which collects plastic from seas</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        src={image4}
                                        className="d-block carousel-image justify-content-center"
                                        alt="image4"
                                        />
                                        <Carousel.Caption>
                                        <h3 className="shadowText">Robotics Kit</h3>
                                        <p className="shadowText">A robotics kit that we give our robotics' students. This is purchasable separately on our shop </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <div className="Home-offer">
                                    What we offer...
                                </div>
                            </Col>
                        </Row>
                        {
                        this.state.isMounted
                        ?
                        <div>
                        <Row>
                            <Col className="d-flex justify-content-center" xs={12} sm={6}>
                                <div><Image src={webd} className="Home-infoImage" alt="webd" /></div>
                            </Col>
                            <Col className="d-flex align-self-center justify-content-center" xs={12} sm={6}>
                                <p>
                                    <div className="Home-infoTitle">
                                        Web Development and Design
                                    </div>
                                    <div className="Home-info">                                
                                        We teach you Front-end web development with HTML5, CSS and Javascript. We also teach you Backend-development with Python and node.
                                    </div>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center" xs={12} sm={6}>
                                <div><Image src={robot} className="Home-infoImage1" alt="robot" /></div>
                            </Col>
                            <Col className="d-flex align-self-center justify-content-center" xs={12} sm={6}>
                                <p>
                                    <div className="Home-infoTitle">
                                        Building Robots    
                                    </div>
                                    <div className="Home-info">
                                        We teach you how to code in Arduino and make RC modules on your own. You can build projects like line following robot, explorer bots, robotic hands, ultrasonic blind stick and many more projects.
                                    </div>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center" xs={12} sm={6}>
                                <div><Image src={makerspace} className="Home-infoImage1" alt="makerspace" /></div>
                            </Col>
                            <Col className="d-flex align-self-center justify-content-center" xs={12} sm={6}>
                                <p>
                                    <div className="Home-infoTitle">
                                        Tinkering in Makerspace
                                    </div>
                                    <div className="Home-info">
                                        Introducing Think beyond Makerspace!!! Our innovation space is a place where students can come together, build projects, experiment, learn new skills and innovate. Here they are faced with challenge based learning modules which are gamified versions of academics and fun at the same time.
                                    </div>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center" xs={12} sm={6}>
                                <div><Image src={coding} className="Home-infoImage" alt="coding" /></div>
                            </Col>
                            <Col className="d-flex align-self-center justify-content-center" xs={12} sm={6}>
                                <p>
                                    <div className="Home-infoTitle">
                                        Coding in Coding camps
                                    </div>
                                    <div className="Home-info">
                                        We teach Web development, Android app development, Scratch programming, C and more. We have specialized instructors who are experienced in the field. This is the perfect haven for learning !!!
                                    </div>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center" xs={12} sm={6}>
                                <div><Image src={rocketlogo} className="Home-infoImage" alt="rocket" /></div>
                            </Col>
                            <Col className="d-flex align-self-center justify-content-center" xs={12} sm={6}>
                                <p>
                                    <div className="Home-infoTitle">
                                        Learning Rocket Science
                                    </div>
                                    <div className="Home-info">
                                        Introducing hobby rocketry!!! We teach you how to build rockets which soar into the skies. Here you learn concepts like thrust, Newton's 3rd law, Gravity and many more scientific concepts practically. We teach you how to build your own rocket.
                                    </div>
                                </p>
                            </Col>
                        </Row> 
                        <Row>
                            <Col className="d-flex justify-content-center" xs={12} sm={6}>
                                <div><Image src={lab} className="Home-infoImage" alt="lab" /></div>
                            </Col>
                            <Col className="d-flex align-self-center justify-content-center" xs={12} sm={6}>
                                <p>
                                    <div className="Home-infoTitle">
                                        Hands On Learning (Academia)
                                    </div>
                                    <div className="Home-info">
                                        In this program we will teach you your academic school chapters and it's concepts practically. And by making projects and having a hands-on learning experience for every concept, your foundations will be better and stronger.
                                    </div>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center" xs={12} sm={6}>
                                <div><Image src={youtube} className="Home-infoImage" alt="youtube" /></div>
                            </Col>
                            <Col className="d-flex align-self-center justify-content-center" xs={12} sm={6}>
                                <p>
                                    <div className="Home-infoTitle">
                                        Subscription at Home    
                                    </div>
                                    <div className="Home-info">
                                        For those who cannot come to our centre, we have got the best solution for You!!! Get subscription based learning online classes for all the programs that we offer.
                                    </div>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center" xs={12} sm={6}>
                                <div><Image src={mike} className="Home-infoImage2" alt="mike" /></div>
                            </Col>
                            <Col className="d-flex align-self-center justify-content-center" xs={12} sm={6}>
                                <p>
                                    <div className="Home-infoTitle">
                                        Public Speaking and Communication
                                        {/* Komi-san can't communicate */}
                                    </div>
                                    <div className="Home-info">
                                        We teach you concepts like public speaking, extempore speaking, social association, etiquette and debating. We also teach you the skills of marketing and trading.
                                    </div>
                                </p>
                            </Col>
                        </Row>
                        </div>
                        :
                        null
                        }                                                 
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home