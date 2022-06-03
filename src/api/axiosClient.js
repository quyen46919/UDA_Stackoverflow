import axios from 'axios';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
let authTokens = localStorage.getItem('UDA_access_token') ? JSON.parse(localStorage.getItem('UDA_access_token')) : '';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER_URL,
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authTokens.accessToken}`
    }
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    if (!authTokens) {
        authTokens = localStorage.getItem('UDA_access_token') ? JSON.parse(localStorage.getItem('UDA_access_token')) : '';
        config.headers.Authorization = `Bearer ${authTokens.accessToken}`;
    }

    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response;
    }
    return response;
}, (error) => {
    // console.log(error.response);
    // if (error.response.status === 401) {
    //     localStorage.removeItem('UDA_access_token');
    //     localStorage.removeItem('UDA_user');
    // }
    if (error.response) {
        // console.log('error.response');
    } else if (error.request) {
        // console.log('error.request');
        // console.log(error.request);
    } else {
        // console.log(' error.message');
        // console.log('Error', error.message);
    }
    // console.log('Error response: ', error.response);
    // throw error;
    return Promise.reject(error.response);
});
export default axiosClient;