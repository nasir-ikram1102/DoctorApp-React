import { cptConstants } from '../_constants';

export function cpts(state = {}, action) {
    switch (action.type) {
    case cptConstants.GET_CPT_BY_CODE_REQUEST:
        return {
        loading: true
        };
    case cptConstants.GET_CPT_BY_CODE_SUCCESS:
        return {
        items: action.users
        };
    case cptConstants.GET_CPT_BY_CODE_FAILURE:
        return { 
        error: action.error
        };
    default:
        return state
    }
}