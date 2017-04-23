/**
 * Created by jorgeayala on 22/04/2017.
 */

import React, { Component } from 'react';
import { LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis, PieChart, Pie } from 'recharts';
// import PieChart from "recharts/src/chart/PieChart";
// import Pie from "recharts/src/polar/Pie";

const data02 = [
    { name: 'A', uv: 1000, pv: 2400},
    { name: 'B', uv: 300, pv: 4567},
    { name: 'C', uv: 280, pv: 1398},
    { name: 'D', uv: 200, pv: 9800},
    { name: 'E', uv: 278, pv: 3908},
    { name: 'F', uv: 189, pv: 4800},
    { name: 'G', uv: 189, pv: 4800},
    { name: 'H', uv: 189, pv: 4800},
    { name: 'I', uv: 189, pv: 4800},
    { name: 'J', uv: 189, pv: 4800},
];

const data03 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
];

class BallViewChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data02,
            opacity: 1
        };
    }

    render() {

        return (
            <div className="line-charts">

                {/*<LineChart width={500} height={300} data={data02}>*/}
                    {/*<XAxis dataKey="name"/>*/}
                    {/*<YAxis/>*/}
                    {/*<CartesianGrid stroke="#eee" strokeDasharray="5 5"/>*/}
                    {/*<Line type="monotone" dataKey="uv" stroke="#8884d8" />*/}
                    {/*<Line type="monotone" dataKey="pv" stroke="#82ca9d" />*/}
                    {/*<Tooltip />*/}

                {/*</LineChart>*/}

                <PieChart width={600} height={600}>
                    <Pie data={data03} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#82ca9d"/>
                    <Tooltip/>
                </PieChart>
            </div>
        )
    }



}

export default BallViewChart;