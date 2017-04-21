/**
 * Created by jorgeayala on 23/02/2017.
 */

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { itemsFetchData } from '../actions/items';

import SearchBar from './SearchBar';
import ItemList from './ItemList';


class IndexHTML extends Component {
    // componentDidMount() {
    //     // this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    //     // // this.props.fetchData('http://lello.blopez.ec:9090/api/v1.0/competences');
    // }

    render() {
        // if (this.props.hasErrored) {
        //     return <p>Sorry! There was an error loading the items</p>;
        // }
        //
        // if (this.props.isLoading) {
        //     return <p>Loading…</p>;
        // }

        return (
            <div id="wrapper">
                <h1>BrainMaps.io</h1>
                <p className="col-lg-10">
                    Welcome to BrainMaps.io the Search Engine for Compentencies!
                </p>


                <SearchBar />

                <br/>

                <ItemList />


            </div>

        );
    }
}

// ModalDescription.propTypes = {
//     fetchData: PropTypes.func.isRequired,
//     items: PropTypes.array.isRequired,
//     hasErrored: PropTypes.bool.isRequired,
//     isLoading: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state) => {
//     return {
//         items: state.items,
//         hasErrored: state.itemsHasErrored,
//         isLoading: state.itemsIsLoading
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchData: (url) => dispatch(itemsFetchData(url))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ModalDescription);
export default (IndexHTML);