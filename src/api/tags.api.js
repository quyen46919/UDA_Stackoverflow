import axiosClient from './axiosClient';

const TagAPI = {
    fetchAllTags : () => {
        const url = '/tags';
        return axiosClient.get(url);
    }
};

export default TagAPI;