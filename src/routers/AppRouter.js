import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AddExpense from './../components/AddExpense';
import Dashboard from './../components/Dashboard';
import EditExpense from './../components/EditExpense';
import Header from './../components/Header';
import Help from './../components/Help';
import NotFound from './../components/NotFound';

const AppRouter = () => {
    // React router only passes routes to components that are rendered by routes, so Header won't get it
    return (
        <BrowserRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Dashboard} />
                <Route path="/create" component={AddExpense}/>
                <Route path="/edit" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    </BrowserRouter>
    );
}

export default AppRouter;