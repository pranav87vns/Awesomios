import { INVENTORY_ADD , ADD_URI} from '../constants';

export function addInventory(data) {
    return {
    type: INVENTORY_ADD,
    payload: data
}
}

export function addUri(uri) {
    return {
    type: ADD_URI,
    payload: uri
}
}