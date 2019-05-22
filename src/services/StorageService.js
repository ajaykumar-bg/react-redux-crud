const StorageService  = {
    setAuthToken (authtoken) {
        localStorage.setItem("auth_token", authtoken)
    },
    getAuthToken () {
        return localStorage.getItem("auth_token")
    },
    setLoggedInUser (loggedInUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    },
    getLoggedInUser () {
        return JSON.parse(localStorage.getItem('loggedInUser'));
    },
    clearStorage () {
        localStorage.clear();
    }
}

export default StorageService;