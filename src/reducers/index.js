import { INVENTORY_ADD , ADD_URI } from '../constants';
import inventory from '../screens/Inventory/inventory.json'

const initialState = {
data : inventory 
};

export const addReducer = (state = initialState, action) => {
    switch(action.type) {
        case INVENTORY_ADD:
        return {
        ...state,
        data:action.payload
    };
    default:
        return state;
    }
}

const uriinitialState = {
    uri : '' 
    };

export const addUri = (state = uriinitialState, action) => {
    switch(action.type) {
        case ADD_URI:
        return {
        ...state,
        uri :action.payload
    };
    default:
        return state;
    }
}
