import { caseConstants } from '../_constants';

export function cases(state = {}, action) {
    switch (action.type) {
        case caseConstants.GET_CASES_REQUEST:
            return {
                loading: true
            };
        case caseConstants.GET_CASES_SUCCESS:
            return {
                case: action.case
            };
        case caseConstants.GET_CASES_FAILURE:
            return {
                error: action.error
            };
        case caseConstants.TOGGLE_CASE_ICD_POPUP:
            return {
                ...state,
                isIcdPopupShown: (state.isIcdPopupShown) ? false : true
            };
        case caseConstants.TOGGLE_CASE_CPT_POPUP:
            return {
                ...state,
                isCptPopupShown: (state.isCptPopupShown) ? false : true
            };
        case caseConstants.GET_CASE_ICD_BY_CODE_REQUEST:
            return {
                ...state,
                caseIcdRequestLoading: true,
            };

        case caseConstants.GET_CASE_ICD_BY_CODE_SUCCESS:
            return {
                ...state,
                caseIcdRequestLoading: false,
                casesIcds: action.response.results
            };
        case caseConstants.GET_CASE_CPT_BY_CODE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case caseConstants.GET_CASE_CPT_BY_CODE_SUCCESS:
            return {
                ...state,
                loading: false,
                casesCpts: action.response.results
            };
        case caseConstants.SET_SELECTED_CASE_ICD:
            return {
                ...state,
                icd: action.icd
            };
        case caseConstants.SET_SELECTED_CASE_CPT:
            return {
                ...state,
                cpt: action.cpt
            };
        case caseConstants.CLEAR_CASE_ICD:
            return {
                ...state,
                casesIcds: []
            };
        case caseConstants.CLEAR_CASE_CPT:
            return {
                ...state,
                casesCpts: []
            };
        default:
            return state
    }
}