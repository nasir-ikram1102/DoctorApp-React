import { caseActions } from '../_actions'

export const icdService = {
    getIcdsByCode
};

function getIcdsByCode(code) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${process.env.REACT_APP_API_URL}icds/getIcdsByCode/${code}`, requestOptions)
        .then((response) => response.json())
        .then(result => {
            return result;
        });
}