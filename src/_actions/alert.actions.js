import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return dispatch => {
        setTimeout(() => { dispatch(clear()); }, 3000);
        dispatch({ type: alertConstants.SUCCESS, message });
    };
}

function error(message) {
    return dispatch => {
        setTimeout(function () { dispatch(clear()); }, 3000);
        dispatch({ type: alertConstants.ERROR, message });
    };
}

function clear() {
    return dispatch => {
        dispatch({ type: alertConstants.CLEAR });
    }
}