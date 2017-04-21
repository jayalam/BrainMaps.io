/**
 * Created by jorgeayala on 21/04/2017.
 */
import request from 'request';

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        let listItems = {};
        var options = {
            url: url,
            headers: {
                'Accept-Language': 'en'
            }
        };
        // let url_request = 'http://lello.blopez.ec:9090/api/v1.0/competences?limit=5';
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                dispatch(itemsIsLoading(false));

                let items = JSON.parse(body).competences;

                listItems = items.map((item) => {
                    // console.log('items : ' + JSON.stringify(item, null, 4));
                    return item;
                }


                );
                console.log("request loaded!");
                dispatch(itemsFetchDataSuccess(listItems))
            }
        });
    };
}