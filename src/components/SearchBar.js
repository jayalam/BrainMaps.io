/**
 * Created by jorgeayala on 23/02/2017.
 */

import React, { Component } from 'react';
import {connect} from "react-redux";
import {itemsFetchData} from "../actions/items";
import {bindActionCreators} from "redux";


class SearchBar extends Component {
    constructor(props){
        super(props)
        this._onChange= this._onChange.bind(this)
        this._onSubmit= this._onSubmit.bind(this)
        this.state = {
            searchString : ""
        }
    }
    _onChange(e){
        this.setState({searchString:e.target.value})
    }
    _onSubmit(){
        if (this.state.searchString.trim() == "") return
        const URL = `http://lello.blopez.ec:9090/api/v1.0/competences/search/${encodeURI(this.state.searchString)}`
        this.props.itemsFetchData(URL)
    }
    render() {
        return (

            <form onSubmit={e => {
                e.preventDefault();
            }}>

                <div className="col-sm-10 form-horizontal">
                    {/* TODO : implement searchbar binding to API Call */}
                    <input id="searchBar" className="form-control" type="text" placeholder="Search for..." onChange={this._onChange} value={this.state.searchString}/>
                    <div className="wrapperBtn">
                        <button className="btn btn-default" onClick={this._onSubmit}>API GET</button>
                        <button className="btn btn-default">Clear All</button>
                    </div>
                </div>
                {/*<button className="btn btn-default" onClick={getAPI}>API GET</button>*/}
            </form>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

function mapDispatchToProps(dispatch) {
    return  bindActionCreators({itemsFetchData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
