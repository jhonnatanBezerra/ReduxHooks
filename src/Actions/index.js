import { actionsType } from '../Actions/actionsTypes';


export const actions = {
    clickLogin : valor =>({
        type: actionsType.LOGIN,
        user : valor
    })
}