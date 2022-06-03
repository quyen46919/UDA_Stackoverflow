import axiosClient from './axiosClient';

const AuthAPI = {
    logup : (params) => {
        const url = '/auth/logup';
        return axiosClient.post(url, params);
    },
    login : (params) => {
        const url = '/auth/login';
        return axiosClient.post(url, params);
    },
    logout : (params) => {
        const url = '/auth/logout';
        return axiosClient.post(url, params);
    },
    forgotPassword: (params) => {
        const url = 'auth/forgot-password';
        return axiosClient.post(url, params);
    }
};

export default AuthAPI;