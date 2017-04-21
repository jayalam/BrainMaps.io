/**
 * Created by jorgeayala on 23/02/2017.
 */

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { itemsFetchData } from '../actions/items';


class SearchBar extends Component {
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

                <form onSubmit={e => {
                    e.preventDefault();
                }}>

                    <div className="col-sm-10 form-horizontal">
                        {/* TODO : implement searchbar binding to API Call */}
                        <input id="searchBar" className="form-control" type="Text" placeholder="Search for..." />
                        <div className="wrapperBtn">
                            <button className="btn btn-default">API GET</button>
                            <button className="btn btn-default">Clear All</button>
                        </div>
                    </div>
                    {/*<button className="btn btn-default" onClick={getAPI}>API GET</button>*/}
                </form>
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
export default (SearchBar);