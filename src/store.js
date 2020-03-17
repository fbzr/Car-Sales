import { createStore } from 'redux';
// import reducer
import { carReducer } from './reducers/car';

// create store with createStore passing the reducer as parameter
const store = createStore(
    carReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;