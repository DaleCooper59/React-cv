import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './templates/Home';
import NotFound from './templates/NotFound';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;