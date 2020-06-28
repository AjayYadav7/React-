import React from 'react'
import { Link } from 'react-router-dom'

function LeftPanel() {
    return (
        <div>
            <ul>
            <li><Link to="/mydashboard">Dashboard</Link></li>
            <li><Link to="/myuserlist">UserList</Link></li>
            <li><Link to="/myuserdetails">UserDetails</Link></li>
            <li><Link to="/mybloglist">BLogList</Link></li>
            <li><Link to="/myblogdetails">BlogDetails</Link></li>
            <li><Link to="/mylogout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default LeftPanel
