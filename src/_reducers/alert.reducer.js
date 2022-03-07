import { alertConstants } from '../_constants';

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                ...state,
                heading: "Success",
                variant: 'success',
                message: action.message,
                show: true
            };
        case alertConstants.ERROR:
            return {
                ...state,
                heading: "Error",
                variant: 'danger',
                message: action.message,
                show: true
            };
        case alertConstants.CLEAR:
            return {
                ...state,
                show: false
            };
        default:
            return state
    }
}