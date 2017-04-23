/**
 * Created by jorgeayala on 22/04/2017.
 */

import React, { Component } from 'react';

import Top from '../IndexHTMLTop';
// import BallViewChart from '../charts/BallViewChart';
// import Chart from '../charts/Chart';

var sampleData = [
    {id: '5fbmzmtc', x: 7, y: 41, z: 6},
    {id: 's4f8phwm', x: 11, y: 45, z: 9},
    // ...
];

class BallView extends Component {
    // getInitialState() {

    constructor(props) {
        super(props);
        this.state = {
            data : sampleData,
            domain: {x: [0, 30], y: [0, 100]}
        };
    }

    render() {
        return (
            <div id="wrapper">
                <Top />

                <br/>

                add BallViewCharts!!!

                {/*<BallViewChart*/}
                    {/*data={this.state.data}*/}
                    {/*domain={this.state.domain}*/}
                {/*/>*/}
                {/*<Chart />*/}
            </div>
        );
    }
}

export default BallView;