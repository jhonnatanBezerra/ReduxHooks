import { actionsType } from '../Actions/actionsTypes';


const INITIAL_STATE = {
    user : 'Joao'
};

export const clickReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case actionsType.LOGIN: 
        return{
            ...state, user: action.user
        };
        default : 
        return state;
    }
}

// AQUI A CHAVE É clickReducer E O VALOR É newValue