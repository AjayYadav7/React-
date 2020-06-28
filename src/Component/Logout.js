import React from 'react'
import { Jumbotron } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

function Logout() {
    return (
        <div>
            <Jumbotron>
                <h1>You have been Logged out</h1>
                {/* <Link to="Login">Login Again</Link> */}
            </Jumbotron>
        </div>
    )
}

export default Logout
