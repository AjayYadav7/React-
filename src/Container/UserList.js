import React from 'react'
import { Jumbotron, Row,Col} from 'react-bootstrap'
import Header from '../Component/Header'
import LeftPanel from '../Component/LeftPanel'

function UserList() {
    return (
        <div>
            <Header />
            <Row>
                <Col sm={2}><LeftPanel /></Col>
                <Col>
                    <Jumbotron>
                        <h1>Hey The USer UserList Component</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    )
}

export default UserList
