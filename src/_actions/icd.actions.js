import { icdConstants } from '../_constants';
import { icdService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const icdActions = {
    getIcdsByCode,
};

function getIcdsByCode(code) {
    return dispatch => {
        dispatch(request({ code }));

        icdService.getIcdsByCode(code)
            .then(
                response => {
                    dispatch(success(response));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(response) { return { type: icdConstants.GET_ICD_BY_CODE_REQUEST, response } }
    function success(response) { return { type: icdConstants.GET_ICD_BY_CODE_SUCCESS, response } }
    function failure(error) { return { type: icdConstants.GET_ICD_BY_CODE_FAILURE, error } }
}