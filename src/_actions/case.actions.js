import { caseConstants } from '../_constants';
import { icdService, cptService } from '../_services';

export const caseActions = {
    toggleCaseIcdPopup,
    toggleCaseCptPopup,
    clearFields,
    getIcdsByCode,
    getCptsByCode,
    setSelectedCaseIcd,
    setSelectedCaseCpt,
    addCase,
    clearCaseCpts,
    clearCaseIcds,
};

function toggleCaseIcdPopup() {
    return dispatch => {
        dispatch(clearCaseIcds());
        dispatch({ type: caseConstants.TOGGLE_CASE_ICD_POPUP });
    };
}

function toggleCaseCptPopup() {
    return dispatch => {
        dispatch(clearCaseCpts());
        dispatch({ type: caseConstants.TOGGLE_CASE_CPT_POPUP });
    };
}

function clearFields() {
    return dispatch => {
        dispatch({ type: caseConstants.CASE_CLEAR_FIELDS });
    };
}

function setSelectedCaseIcd(icd) {
    return dispatch => {
        dispatch({ type: caseConstants.SET_SELECTED_CASE_ICD, icd });
    };
}

function setSelectedCaseCpt(cpt) {
    return dispatch => {
        dispatch({ type: caseConstants.SET_SELECTED_CASE_CPT, cpt });
    };
}

function addCase(currentCase) {
    return dispatch => {
        dispatch({ type: caseConstants.ADD_CASES_REQUEST, currentCase });
    };
}

function clearCaseIcds() {
    return dispatch => {
        dispatch({ type: caseConstants.CLEAR_CASE_ICD });
    };
}

function clearCaseCpts() {
    return dispatch => {
        dispatch({ type: caseConstants.CLEAR_CASE_CPT });
    };
}

function getIcdsByCode(code) {
    return dispatch => {
        dispatch(request({ code }));

        icdService.getIcdsByCode(code)
            .then(
                response => {
                    dispatch(success(response));
                }
            );
    };

    function request(response) { return { type: caseConstants.GET_CASE_ICD_BY_CODE_REQUEST, response } }
    function success(response) { return { type: caseConstants.GET_CASE_ICD_BY_CODE_SUCCESS, response } }
}

function getCptsByCode(code) {
    return dispatch => {
        dispatch(request({ code }));

        cptService.getCptsByCode(code)
            .then(
                response => {
                    dispatch(success(response));
                }
            );
    };

    function request(response) { return { type: caseConstants.GET_CASE_CPT_BY_CODE_REQUEST, response } }
    function success(response) { return { type: caseConstants.GET_CASE_CPT_BY_CODE_SUCCESS, response } }
}