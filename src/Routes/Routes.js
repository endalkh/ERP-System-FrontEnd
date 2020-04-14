import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import SignIn from '../Components/SignIn/SignIn';
import HomeNavBar from '../Components/Dashboard/HomeNavBar';
import Home from '../Components/Dashboard/Home';
import HR from '../Components/HR/HRhome';
import Inventory from '../Components/Inventory/Inventory';
import Finance from '../Components/Finance/Finance';
import Sales from '../Components/Saless/Sales';
import CreateOrder from "../Components/Saless/components/CreateOrder";
import UsersTable from "../Components/HR/components/UsersTable/UsersTable";
import UserProfile from "../Components/HR/components/UserProfile/UserProfile";
import ViewAllOrders from "../Components/Saless/components/ViewAllOrders";
import Profile from "../Components/HR/components/UserProfile/Profile";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/" component={HR} />  */}
                    <Route path="/Dashboard" component={HomeNavBar} />
                    {/* <Route path="/UserList" component={UserList} /> */}
                    {/* <Route path="/Inventory" component={Inventory} /> */}
                    {/* <Route path="/" component={Inventory} /> */}
                    <Route path="/Finance" component={Finance} />
                    {/* <Route path="/" component={UsersTable} /> */}
                    <Route path="/" component={UsersTable} />
                    <Route path="/profile:id" component={Profile} />


                    {/* <Route path="/" component={UserProfile} /> */}

                    <Route path="/sales" component={Sales} />


                </Switch>
            </Router>
        )
    }
}



