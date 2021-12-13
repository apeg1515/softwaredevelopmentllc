import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

import BaseView from "../components/view/BaseView";
import LoginView from "../components/view/LoginView";
import TableView from "../components/view/TableView";

const Home = () => <h1>NOW IT's WORKING</h1>
const Dashboard = () => <div>Protected</div>

interface R {
    auth: boolean
}

let value = JSON.parse(localStorage.getItem('authorized') || "")
console.log(value.authenticated)
const Routes: React.FC<R> = ({ auth }): JSX.Element => {

    return (
        <Switch>
            <Route exact path="/" component={BaseView(Home)} />
            <Route path="/login" component={BaseView(LoginView)} />
            <ProtectedRoute authenticationPath="/auth" isAuthenticated={value.authenticated} component={BaseView(TableView)} />
        </Switch>
    );
}

export default Routes;
