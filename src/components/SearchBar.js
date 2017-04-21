/**
 * Created by jorgeayala on 23/02/2017.
 */

import React, { Component } from 'react';
import { connect } from "react-redux";
import { itemsFetchData, resetItems } from "../actions/items";
import { bindActionCreators } from "redux";


class SearchBar extends Component {
    constructor(props){
        super(props);
        this._onChange= this._onChange.bind(this);
        this._onSubmit= this._onSubmit.bind(this);
        this._onClear= this._onClear.bind(this);
        this.state = {
            searchString : ""
        }
    }

    _onChange(e){
        this.setState({searchString:e.target.value});
    }

    _onSubmit(){
        if (this.state.searchString.trim() === "") return;
        const URL = `http://lello.blopez.ec:9090/api/v1.0/competences/search/${encodeURI(this.state.searchString)}`;
        this.props.itemsFetchData(URL)
    }

    _onClear(){
        this.setState({searchString: ''});
        this.props.resetItems();
    }

    render() {
        return (

            <form onSubmit={e => {
                e.preventDefault();
            }}>

                <div className="col-sm-10 form-horizontal">
                    <input id="searchBar" className="form-control" type="text" placeholder="Search for..." onChange={this._onChange} value={this.state.searchString}/>
                    <div className="wrapperBtn">
                        <button className="btn btn-default" onClick={this._onSubmit}>API GET</button>
                        <button className="btn btn-default" onClick={this._onClear}>Clear All</button>
                    </div>
                </div>
            </form>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

function mapDispatchToProps(dispatch) {
    return  bindActionCreators({itemsFetchData,resetItems}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
