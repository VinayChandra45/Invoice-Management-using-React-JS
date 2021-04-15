import {createStore} from 'redux';
 import CountReducer from '../reducers/CountReducer';
import reducer from '../reducers/reducer';
export const store = createStore(
    CountReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());