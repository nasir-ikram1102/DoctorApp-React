export const commonService = {
    addLoginUser,
    getLoginUser,
    removeLoginUser,
    getLoginUserDetails,
    handleErrorResponse,
};


function addLoginUser(token){
    localStorage.setItem("user", token);
}

function getLoginUser(){
    return localStorage.getItem("user");
}

function removeLoginUser(){
    localStorage.removeItem("user");
}

function getLoginUserDetails(){
    return;
}

function handleErrorResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}