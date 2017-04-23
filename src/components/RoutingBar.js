/**
 * Created by jorgeayala on 22/04/2017.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RoutingBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/ball-view">BallView</Link></li>
                    <li><Link to="/category-view">CategoryView</Link></li>
                    <li><Link to="/list-View">ListView</Link></li>
                </ul>
            </div>
        );
    }
}

export default RoutingBar;