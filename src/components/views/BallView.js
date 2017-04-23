/**
 * Created by jorgeayala on 22/04/2017.
 */

import React, { Component } from 'react';

import Top from '../IndexHTMLTop';
import ExampleBubbleChart from '../charts/Chart';

class BallView extends Component {
    render() {
        return (
            <div id="wrapper">
                <Top />

                <br/>

                <ExampleBubbleChart />
            </div>
        );
    }
}

export default BallView;