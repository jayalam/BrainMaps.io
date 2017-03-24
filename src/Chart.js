/**
 * Created by jorgeayala on 24/03/2017.
 */

import React, { Component, PropTypes } from 'react';
import * as d3 from "d3";


var Chart = React.createClass({
    getInitialState() {
        return {
            dataset: 'apples'
        }
    },
    setDataset(e) {
        this.setState({
            dataset: e.target.value
        });
    },
    render: function() {
        var width = window.innerWidth/2,
            height = window.innerHeight/2,
            radius = Math.min(width, height) / 2;

        // var color = d3.schemeCategory20();
        var color = d3.scaleOrdinal(d3.schemeCategory20);

        var pie = d3.pie()
            .value(d => d[this.state.dataset])
            .sort(null);

        var arc = d3.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 20);

        var displayedData = pie(this.props.data);

        return <div className="D3Chart">
            <form>
                <label><input type="radio"name="dataset" value="apples"
                              onChange={this.setDataset}
                              checked={this.state.dataset == 'apples'} /> Apples</label>
                <label><input type="radio" name="dataset" value="oranges"
                              onChange={this.setDataset}
                              checked={this.state.dataset == 'oranges'} /> Oranges</label>
            </form>
            <svg width={width} height={height}>
                <g transform={"translate(" + width / 2 + "," + height / 2 + ")"}>
                    {displayedData.map((slice, i) =>
                        <path
                            fill={color(i)}
                            key={i}
                            d={arc(slice)} />
                    )}
                </g>
            </svg>
        </div>;
    }
});


export default Chart;
