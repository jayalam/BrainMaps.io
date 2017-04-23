/**
 * Created by jorgeayala on 22/04/2017.
 */

import React, { Component } from 'react';

import Top from '../IndexHTMLTop';
import ItemList from '../ItemList';


class ListView extends Component {
    render() {
        return (
            <div id="wrapper">
                <Top />

                <br/>

                <ItemList />
            </div>
        );
    }
}

export default ListView;