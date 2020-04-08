import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


import SignIn from '../Components/SignIn/SignIn';
import HomeNavBar from '../Components/Dashboard/HomeNavBar';
import UserList from '../Components/HR/UserList';
import Home from '../Components/Dashboard/Home';
import UserProfile from '../Components/HR/HRhome'
import Production from '../Production';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {/* <Route path="/userProfile" exact component={UserProfile} /> */}
                    {/* <Route path="/" exact component={Home} /> */}
                    <Route path="/" exact component={Production} />
                    <Route path="/Dashboard" component={HomeNavBar} />
                    <Route path="/UserList" component={UserList} />
                </Switch>
            </Router>
        )
    }
}



