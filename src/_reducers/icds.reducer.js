import { icdConstants } from '../_constants';

export function icds(state = {}, action) {
    // console.log(action);
    // console.log(state);
    switch (action.type) {
        case icdConstants.GET_ICD_BY_CODE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case icdConstants.GET_ICD_BY_CODE_SUCCESS:
            return {
                ...state,
                items: action.users,
                //loading: false
            };
        case icdConstants.GET_ICD_BY_CODE_FAILURE:
            return {
                ...state,
                error: action.error,
                //loading: false
            };
        default:
            return state
    }
}