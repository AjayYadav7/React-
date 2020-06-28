import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import Dashboard from '../Container/Dashboard'
import UserDetails from '../Container/UserDetails'
import UserList from '../Container/UserList'
import BlogList from '../Container/BlogList'
import BlogDetails from '../Container/BlogDetails'
import Registeration from './Registeration'
function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="myregisteration" component={Registeration} />
                    <Route path="mydashboard" component={Dashboard} />
                    <Route path="myuserlist" component={UserList} />
                    <Route path="myuserdetails" component={UserDetails} />
                    <Route path="mybloglist" component={BlogList} />
                    <Route path="myblogdetails" component={BlogDetails} />
                    <Route path="mylogout" component={Logout} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
