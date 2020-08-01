import { SHOW_ALERT, REMOVE_ALERT, REDIRECT } from '../actions/type';

//type:Success and Error
/*openType:
    0:Cancel the box
    1:Redirect the box
*/

const initialState = {
    type: "",
    message: "",
    open: false,
    openType: 0
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SHOW_ALERT:
            return {
                ...state,
                ...payload
            };
        case REDIRECT:
            return {
                ...state,
                ...payload,
                open: false
            };
        case REMOVE_ALERT:
            return {
                type: "",
                message: "",
                open: false,
                openType: 0
            }
        default:
            return state;
    }
}