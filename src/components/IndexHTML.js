/**
 * Created by jorgeayala on 23/02/2017.
 */

import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ItemList from './ItemList';


class IndexHTML extends Component {
    render() {
        return (
            <div id="wrapper">
                <h1>BrainMaps.io</h1>
                <p className="col-lg-10">
                    Welcome to BrainMaps.io the Search Engine for Compentencies!
                </p>

                <SearchBar />

                <br/>

                <ItemList />

            </div>
        );
    }
}

export default (IndexHTML);