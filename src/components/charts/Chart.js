/**
 * Created by jorgeayala on 23/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../../actions/items';
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

    // create(data) {
    //     console.log('CREATED CHART with data : ', data);
    //     // Create your chart
    // }
    //
    // update(data) {
    //     console.log('UPDATED CHART with data : ', data);
    //     // Update your chart
    //     // this.setState({data});
    // }
    //
    // unmount() {
    //     console.log('UNMOUNTED CHART');
    //     this.el.remove();
    // }

    // componentWillReceiveProps(data){
    //     // this.setState(this.props.items);
    //     // console.log('componentWillReceiveProps', data);
    //     this.setState(data);
    // }

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
                    diameter={500}
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