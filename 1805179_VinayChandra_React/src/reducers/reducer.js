import { combineReducers } from 'redux';
import CountReducer from './CountReducer';
import InvoiceReducer from './InvoiceReducer';


const reducer = combineReducers({
    CountReducer,
    InvoiceReducer
});


export default reducer;