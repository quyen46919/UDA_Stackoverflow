import axiosClient from './axiosClient';

const UserAPI = {
    fetchAllPostedQuestions : (userId) => {
        const url = `/user/questions/${userId}`;
        return axiosClient.get(url);
    },
    updateUser : (userId, params) => {
        const url = `/user/${userId}`;
        return axiosClient.patch(url, params);
    },
    updateUserPassword : (userId, params) => {
        const url = `/user/password/${userId}`;
        return axiosClient.patch(url, params);
    }
};

export default UserAPI;