import {createStore} from 'redux';
import combinedReducer from '../reducer/categories';

export default createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());