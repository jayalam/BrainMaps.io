/**
 * Created by jorgeayala on 23/02/2017.
 */

import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import request from 'request';
import 'bootstrap/dist/css/bootstrap.min.css';


// TODO : check why the search is not working with limit and offset!!!!
// let url = 'http://lello.blopez.ec:9090/api/v1.0/competences/bca6344d-3e9b-4193-b37b-b0e6e009aed2';
// let url = 'http://lello.blopez.ec:9090/api/v1.0/competences/?top=true';
let url = 'http://lello.blopez.ec:9090/api/v1.0/competences/search/Cisco Data Centre';

let listItems = {};

const api_get = (url) => {

    var options = {
        url: url,
        headers: {
            'Accept-Language': 'en'
        }
    };

    request.get(options, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let items = JSON.parse(body).competences;

            listItems = items.map((item) =>

                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className="mb-1">{item.name.en}</h4>
                    </div>
                    {item.definition.en ? (
                        <p className="mb-1">{item.definition.en}</p>
                    ): (
                        null
                    )}



                    <p>Code : {item.code}</p>
                </a>


            );
            console.log("loaded!");
        }

    });

};


let limit = 5;
let offset = 0;
api_get(url + '&limit=' + limit + '&offset=' + offset);
offset += limit;


const apiReducer = (state = [], action) => {

    switch (action.type) {
        case 'API_GET' :
            api_get(url + '&limit=' + limit + '&offset=' + offset);
            offset += limit;
            return [
                ...state,
                ...action.response
            ];
        case 'CLEAR':
            offset = 0;
            return [];
        default :
            return state;
    }
};

const Index = ({
    value,
    getAPI,
    clear
}) => (
    <div>
        <h1>BrainMaps.io</h1>
        <p className="col-lg-10">
            Welcome to BrainMaps.io the Search Engine for Compentencies!
        </p>



        <form onSubmit={e => {
            e.preventDefault();
        }}>

            <div className="col-sm-10 form-horizontal">
                {/* TODO : implement searchbar binding to API Call */}
                <input id="searchBar" className="form-control" type="Text" placeholder="Search for..." />
            </div>
            <button className="btn btn-default" onClick={getAPI}>API GET</button>

        </form>



        <br/>



        <div className="form-group col-lg-10">
                <button className="btn btn-default" onClick={clear}>Clear All</button>
        </div>

        <br/>

        <div className="list-group">{value}</div>


    </div>
);


const store = createStore(apiReducer);

const render = () => {
    ReactDOM.render(
        <Index
            value={ store.getState() }
            getAPI={ () =>
                store.dispatch({
                    type: 'API_GET',
                    response: listItems
                })
            }
            clear={ () =>
                store.dispatch({
                    type: 'CLEAR',
                    response: listItems
                })
            }
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();