import { actionsType } from '../Actions/actionsTypes';


export const actions = {
    clickButton : value =>({
        type: actionsType.CLICK_UPDATE_VALUE,
        newValue : value
    })
}