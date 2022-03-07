import { caseActions } from '../_actions'

export const cptService = {
    getCptsByCode
};

function getCptsByCode(code) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${process.env.REACT_APP_API_URL}cpts/getCptsByCode/${code}`, requestOptions)
        .then((response) => response.json())
        .then(result => {
            return result;
        });
}