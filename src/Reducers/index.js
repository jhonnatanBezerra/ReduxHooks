import {combineReducers} from 'redux';
import {clickReducer} from './clickReducer';
import {otherReducer} from './otherReducer';

const reducers = combineReducers({
    clickState: clickReducer, // modificando o nome da chave de clickReducer para ClickState
    otherState: otherReducer // modificando o nome da chave de otherReducer para otherState
});

/*
const reducers = combineReducers({
     clickReducer, // declarando o nome da chave do reducer
     otherReducer // declarando o nome da chave do reducer
});

*/



export {reducers}