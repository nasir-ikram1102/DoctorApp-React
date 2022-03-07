import { cptConstants } from '../_constants';
import { cptService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const cptActions = {
    getCptsByCode,
};

function getCptsByCode(code) {
    return dispatch => {
        dispatch(request({ code }));

        cptService.getCptsByCode(code)
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

    function request(response) { return { type: cptConstants.GET_CPT_BY_CODE_REQUEST, response } }
    function success(response) { return { type: cptConstants.GET_CPT_BY_CODE_SUCCESS, response } }
    function failure(error) { return { type: cptConstants.GET_CPT_BY_CODE_FAILURE, error } }
}