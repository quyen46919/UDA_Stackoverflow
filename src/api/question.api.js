import axiosClient from './axiosClient';

const QuestionAPI = {
    fetchQuestions : (params) => {
        const url = '/questions';
        return axiosClient.get(url, { params });
    },
    fetchQuestionDetail: (questionId) => {
        const url = `/questions/${questionId}`;
        return axiosClient.get(url);
    },
    createNewQuestion: (params) => {
        const url = '/questions';
        return axiosClient.post(url, params);
    }
};

export default QuestionAPI;