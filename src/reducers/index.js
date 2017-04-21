/**
 * Created by jorgeayala on 21/04/2017.
 */

import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, selectedItem } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    selectedItem
});