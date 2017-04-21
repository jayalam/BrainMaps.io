/**
 * Created by jorgeayala on 23/02/2017.
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/app.css'

import IndexHTML from './components/IndexHTML';

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <IndexHTML />
        {/*<ItemList />*/}
    </Provider>,
    document.getElementById('app')
);