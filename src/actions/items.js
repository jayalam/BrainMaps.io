/**
 * Created by jorgeayala on 21/04/2017.
 */
import request from 'request';

export const RESET_ITEMS = 'RESET_ITEMS';
export const SELECT_ITEM = 'SELECT_ITEM';
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

export function itemsHasErrored(bool) {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
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
        request(options, (error, response, body) => {
            if (error) dispatch(itemsHasErrored(true));
            if (!error && response.statusCode === 200) {
                dispatch(itemsIsLoading(false));

                let items = JSON.parse(body).competences;

                listItems = items.map((item) => {
                    // console.log('items : ' + JSON.stringify(item, null, 4));
                    return item;
                });

                console.log("request loaded!");
                dispatch(itemsFetchDataSuccess(listItems))
            }
        });
    };
}

export const resetItems = () =>({
  type : RESET_ITEMS
});

export const selectItem= (item)=>({
        type: SELECT_ITEM,
        item
    }
);