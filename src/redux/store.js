import {createStore} from 'redux';
import todoReducer from './todo.reducer';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    todoReducer // todoReducer: todoReducer,
});

export default createStore(reducers);

