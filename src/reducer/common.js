/**
 * Created by Wenba on 2017/6/7.
 */
//action type
export const SHOW_MENU='SHOW_MENU'

//reducer
export default function(state={show_menu:false},action){
    switch(action.type){
        case SHOW_MENU:
            return {show_menu:true}
        default:
            return state
    }
}

// action creators
export const showMenu = (state) => {
    return { type:SHOW_MENU,state}
}