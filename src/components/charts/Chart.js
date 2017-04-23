/**
 * Created by jorgeayala on 23/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Chart from 'd3act';

class ExampleBubbleChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem : null,
            visible: false
        }
    }

    render () {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        if (this.props.items.length === 0) return null;


        let data = {
            children: []
        };

        data.children = this.props.items.map((item, i) => {
            let x = {
                name: item.name.en,
                value: 100 - i,
                description: item.definition.en
            };
            return x;
        });

        console.log('data : ', data.children[0].name);

        return (
            <div>
                <Chart
                    type={"bubble"}
                    diameter={window.innerWidth}
                    showTooltips={true}
                    data={data}
                />
            </div>
        );
    }
}

ExampleBubbleChart.propTypes = {
    items: PropTypes.array,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleBubbleChart);