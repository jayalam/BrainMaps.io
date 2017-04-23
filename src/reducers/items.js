/**
 * Created by jorgeayala on 21/04/2017.
 */
import {
    ITEMS_HAS_ERRORED,
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS,
    RESET_ITEMS,
    SELECT_ITEM
} from '../actions/items';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default :
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items;
        case ITEMS_IS_LOADING :
            return [];
        case RESET_ITEMS:
            return [];
        default:
            return [...state];
    }
}
export function selectedItem(state = {}, action) {
    switch (action.type) {
        case SELECT_ITEM:
            console.log("selection", action.item);
            return {...action.item};
        default :
            return {...state};
    }
}