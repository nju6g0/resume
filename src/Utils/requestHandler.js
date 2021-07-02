import axios from 'axios';

const baseUrl = 'https://api.thecatapi.com/v1';

export const requestHandler = (method, requestUrl, options) => {
    return axios({
        method,
        url: `${baseUrl}${requestUrl}`,
        ...options,
    })
        .then(async (response) => {
            return {
                ...response,
            };
        })
        .catch((error) => {
            return error.response;
        });
};
