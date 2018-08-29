import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
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


const routes = (
    <BrowserRouter>
        <Fragment>
            <Route exact={true} path="/" component={ExpenseDashboard} />
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={Help} />
        </Fragment>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));