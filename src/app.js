import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';

import './styles/styles.scss'

const ExpenseDashboard = () => {
    return (
    <div>
        this i from the dashboard component
    </div>        

    );
};

const AddExpense = () => {
    return (
    <div>
        this i from the AddExpense component
    </div>        

    );
};

const EditExpense = () => {
    return (
        <p>From Edit Expense</p>
    );
};

const Help = () => {
    return (<p>Help Page</p>);
};

const NotFound = () => {
    return (
        <Fragment>
            404 - <Link to="/">Go Home</Link>
        </Fragment>
    );
};

const Header = () => {
    return (
        <header>
            <h1>Expense Manager</h1>
            <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense Report</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    );
};


const routes = (
    <BrowserRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={ExpenseDashboard} />
                <Route path="/create" component={AddExpense}/>
                <Route path="/edit" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));