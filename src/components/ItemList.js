/**
 * Created by jorgeayala on 23/02/2017.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

import Modal from './Modal';

class ItemList extends Component {
    componentDidMount() {
        // this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        this.props.fetchData('http://lello.blopez.ec:9090/api/v1.0/competences');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className="list-group">
                {/*<Modal />*/}
                {this.props.items.map((item) => (


                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                {item.name.en ? (
                                    <h4 className="mb-1"><strong>Name:</strong><br/>{item.name.en}</h4>
                                ): (
                                    <p><strong>Name: </strong>no name provided</p>
                                )}
                            </div>
                            {item.definition.en ? (
                                <p className="mb-1"><strong>Definition:</strong><br/>{item.definition.en}</p>
                            ): (
                                <p>no definition provided</p>
                            )}


                            <p><strong>code:</strong><br/>{item.code}</p>
                        </a>

                ))}
            </div>



    );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);