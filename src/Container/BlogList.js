import React from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'
import Header from '../Component/Header'
import LeftPanel from '../Component/LeftPanel'

function BlogList() {
    return (
        <div>
            <Header />
            <Row>
                <Col sm={2}><LeftPanel /></Col>
                <Col>
                <Jumbotron>
                    <h1>BLog List</h1>
                </Jumbotron>
                </Col>
            </Row>
            
        </div>
    )
}

export default BlogList
