import { actionsType } from '../Actions/actionsTypes';


const INITIAL_STATE = {
    newValue : 'Reducer'
};

export const clickReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case actionsType.CLICK_UPDATE_VALUE: 
        return{
            ...state, newValue: action.newValue
        };
        default : 
        return state;
    }
}

// AQUI A CHAVE É clickReducer E O VALOR É newValue