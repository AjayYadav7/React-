import React from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'
import LeftPanel from '../Component/LeftPanel'
import Header from '../Component/Header'

function UserDetails() {
    return (
        <div>
        <Header />

            <Row>
                <Col sm={2}><LeftPanel /></Col>
                <Col>
                <Jumbotron>
                    <h1 text-center>USerDetails</h1>
                </Jumbotron>
                </Col>
            </Row>
           
        </div>
    )
}

export default UserDetails
