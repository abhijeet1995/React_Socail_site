import { SHOW_ALERT, REMOVE_ALERT } from './type';

export const setAlert = (data, typeRes, openType, cancelButton, customOkay) => dispatch => {

    dispatch({
        type: SHOW_ALERT,
        payload: {
            message: data,
            type: typeRes,
            open: true,
            openType: openType ? openType : 0,
            cancelButton: cancelButton ? cancelButton : false,
            cancelButton: cancelButton ? cancelButton : false
        }
    });
    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT });
    }, 3000);
};

export const removeAlert = () => dispatch => {
    dispatch({
        type: REMOVE_ALERT
    });
}