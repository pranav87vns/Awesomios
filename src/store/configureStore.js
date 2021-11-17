import { createStore, combineReducers } from 'redux';
import {addReducer ,addUri} from '../reducers';

const rootReducer = combineReducers(
{ inventory : addReducer,
  uri : addUri }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;