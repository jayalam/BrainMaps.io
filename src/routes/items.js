/**
 * Created by jorgeayala on 22/04/2017.
 */

import React from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';

import BallView from '../components/views/BallView';
import CategoryView from '../components/views/CategoryView';
import ListView from '../components/views/ListView';

const routes = ()=> {
    return (
        <Router>
            <div>
                <Route exact path="/" component={ListView}/>
                <Route exact path="/ball-view" component={BallView}/>
                <Route exact path="/category-view" component={CategoryView}/>
                <Route exact path="/list-view" component={ListView}/>
            </div>
        </Router>
    );
};

export default routes;