/**
 * Created by jorgeayala on 23/04/2017.
 */
import React, { Component } from 'react';
import * as d3 from 'd3';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: 'apples'
        };
    }

    _setDataset(e) {
        this.setState({
            dataset: e.target.value
        });
    }

    render() {
        let width = window.innerWidth/2,
            height = window.innerHeight/2,
            radius = Math.min(width, height) / 2;

        let color = d3.scaleOrdinal(d3.schemeCategory20);

        let pie = d3.pie()
            .value(d => d[this.state.dataset])
            .sort(null);

        let arc = d3.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 20);

        let displayedData = pie(this.props.data);

        return (
            <div className="D3Chart">
                <form>
                    <label><input type="radio"name="dataset" value="apples"
                                  onChange={this._setDataset}
                                  checked={this.state.dataset === 'apples'} /> Apples</label>
                    <label><input type="radio" name="dataset" value="oranges"
                                  onChange={this._setDataset}
                                  checked={this.state.dataset === 'oranges'} /> Oranges</label>
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
            </div>
        );
    }

}

export default Chart;