
const loadInitialData = (successCallback, errorCallback) => {
    fetch('/api/state/initial', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        successCallback(data);
    }).catch(err => {
        errorCallback(err);
    });
};

export {loadInitialData};