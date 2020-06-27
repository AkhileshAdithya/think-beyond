import React, { Component } from 'react'
import './Shop.css'
import db from '../firebase'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Shop extends Component{
    state = {
        kits : [],
        kitsName : [],
        kitsImgSrc : [],
        kitsDesc : [],
        kitsCost : [],
        academia : [],
        academiaName : [],
        academiaImgSrc : [],
        academiaDesc : [],
        academiaCost : [],
        rocket : [],
        rocketName : [],
        rocketImgSrc : [],
        rocketDesc : [],
        rocketCost : [],
        program : [],
        programName : [],
        programImgSrc : [],
        programDesc : [],
        programCost : []
    }
    firestoreGet = () => {
        db.collection('kits').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var newKits = [...this.state.kits, doc.id]
                var newName = [...this.state.kitsName, doc.data().name]
                var newImgSrc = [...this.state.kitsImgSrc, doc.data().imgSrc]
                var newDesc = [...this.state.kitsDesc, doc.data().desc]
                var newCost = [...this.state.kitsCost, doc.data().cost]
                this.setState({ kits: newKits , kitsName : newName , kitsImgSrc : newImgSrc , kitsDesc : newDesc , kitsCost : newCost})
            })
        }).catch((err) => {
            console.log(err)
        })
        db.collection('academia').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var newKits = [...this.state.academia, doc.id]
                var newName = [...this.state.academiaName, doc.data().name]
                var newImgSrc = [...this.state.academiaImgSrc, doc.data().imgSrc]
                var newDesc = [...this.state.academiaDesc, doc.data().desc]
                var newCost = [...this.state.academiaCost, doc.data().cost]
                this.setState({ academia: newKits , academiaName : newName , academiaImgSrc : newImgSrc , academiaDesc : newDesc , academiaCost : newCost})
            })
        }).catch((err) => {
            console.log(err)
        })
        db.collection('rocket').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var newKits = [...this.state.rocket, doc.id]
                var newName = [...this.state.rocketName, doc.data().name]
                var newImgSrc = [...this.state.rocketImgSrc, doc.data().imgSrc]
                var newDesc = [...this.state.rocketDesc, doc.data().desc]
                var newCost = [...this.state.rocketCost, doc.data().cost]
                this.setState({ rocket: newKits , rocketName : newName , rocketImgSrc : newImgSrc , rocketDesc : newDesc , rocketCost : newCost})
            })
        }).catch((err) => {
            console.log(err)
        })
        db.collection('program').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var newKits = [...this.state.program, doc.id]
                var newName = [...this.state.programName, doc.data().name]
                var newImgSrc = [...this.state.programImgSrc, doc.data().imgSrc]
                var newDesc = [...this.state.programDesc, doc.data().desc]
                var newCost = [...this.state.programCost, doc.data().cost]
                this.setState({ program: newKits , programName : newName , programImgSrc : newImgSrc , programDesc : newDesc , programCost : newCost})
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    componentDidMount(){
        this.firestoreGet()
    }
    shortenedDesc = (desc) => {
        var newdesc = ""
        if(desc.length > 60){
            newdesc = desc.substring(0, 57) + "..."
            return newdesc 
        }
        else return desc
    }
    // addData = () => {
    //     let data = {
    //         name: `Grade 04`,
    //         desc: `Academica is a program which is hands on learning with academic orientation. We have Everything required for a class 04 student here. This program encourages experimental and hands-on learning.`,
    //         cost: '2000',
    //         imgSrc: `/Images/academia/academia-04.jpeg`
    //     };
    //     db.collection('academia').doc(`04`).set(data)
    // }
    render() {
        return (
            <div className="Shop">
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <span className="Shop-title">Academia</span>
                        </Col>
                    </Row>
                    <Row>
                        <Card className="Shop-card" onClick={(e) => {this.props.history.push('/shop/academia')}}>
                            <Card.Img variant="top" alt="Academia" src="/Images/academia/academia-0.jpeg" />
                            <Card.Body>
                                <Card.Title>Academia</Card.Title>
                                <Card.Text>₹12000</Card.Text>
                                <Card.Text>Academica is a program which is hands on learning with academic orientation. We have Everything required for a class 01-10 student here. This program encourages experimental and hands-on learning.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <span className="Shop-title">Cool Kits</span>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.rocket.map((rocket) => {
                            return (
                                <Col xs={12} sm={4} key={rocket}>
                                    <Card className="Shop-card" onClick={(e) => {this.props.history.push('/shop/rocket/'+rocket)}}>
                                        <Card.Img variant="top" alt={this.state.rocketName[rocket - 1]} src={this.state.rocketImgSrc[rocket - 1]} />
                                        <Card.Body>
                                            <Card.Title>{this.state.rocketName[rocket - 1]}</Card.Title>
                                            <Card.Text>₹{this.state.rocketCost[rocket - 1]}</Card.Text>
                                            <Card.Text>{this.state.rocketDesc[rocket - 1]}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <span className="Shop-title">Long Term Programs</span>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.program.map((program) => {
                            return (
                                <Col xs={12} sm={4} key={program}>
                                    <Card className="Shop-card" onClick={(e) => {this.props.history.push('/shop/program/'+program)}}>
                                        <Card.Img variant="top" alt={this.state.programName[program - 1]} src={this.state.programImgSrc[program - 1]} />
                                        <Card.Body>
                                            <Card.Title>{this.state.programName[program - 1]}</Card.Title>
                                            <Card.Text>₹{this.state.programCost[program - 1]}</Card.Text>
                                            <Card.Text>{this.state.programDesc[program - 1]}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <span className="Shop-title">Other Kits</span>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.kits.map((kit) => {
                            return (
                                <Col xs={12} sm={4} key={kit}>
                                    <Card className="Shop-card" onClick={(e) => {this.props.history.push('/shop/kits/'+kit)}}>
                                        <Card.Img variant="top" alt={this.state.kitsName[kit - 1]} src={this.state.kitsImgSrc[kit - 1]} />
                                        <Card.Body>
                                            <Card.Title>{this.state.kitsName[kit - 1]}</Card.Title>
                                            <Card.Text>₹{this.state.kitsCost[kit - 1]}</Card.Text>
                                            <Card.Text>{this.state.kitsDesc[kit - 1]}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    {/* <button onClick={this.addData}>temp to add data</button> */}
                </Container>
            </div>
        )
    }
}

export default Shop