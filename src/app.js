import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
    return (<p>404</p>);
};


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={ExpenseDashboard} />
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={Help} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));