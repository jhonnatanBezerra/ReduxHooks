import { actionsType } from '../Actions/actionsTypes';


export const actions = {
    clickButton : valor =>({
        type: actionsType.CLICK_UPDATE_VALUE,
        newValue : valor
    })
}