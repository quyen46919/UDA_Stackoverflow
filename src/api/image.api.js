import axiosClient from './axiosClient';

const ImageAPI = {
    uploadSingleImage : (params) => {
        const url = '/upload-image';
        return axiosClient.get(url, params);
    },
    uploadMultiImages: (params) => {
        const url = '/upload-image/multiple';
        return axiosClient.get(url, params);
    }
};

export default ImageAPI;