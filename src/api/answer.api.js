import axiosClient from './axiosClient';

const AnswerAPI = {
    createNewAnswer: (params) => {
        const url = '/answers';
        return axiosClient.post(url, params);
    }
};

export default AnswerAPI;