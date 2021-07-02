import { requestHandler } from 'Utils/requestHandler';

// 取得列表
export const getImagesListAPI = (data) => {
    return requestHandler('GET', `/images/search`, {
        params: data.params,
        headers: {
            contentType: 'application/json',
        },
    });
};

// 取得我的最愛列表
export const getFavoriteListAPI = (data, token) => {
    return requestHandler('GET', `/favourites`, {
        params: data.params,
        headers: {
            contentType: 'application/json',
            'x-api-key': token,
        },
    });
};

// 取得我的上傳列表
export const getUploadListAPI = (data, token) => {
    return requestHandler('GET', `/images`, {
        params: data.params,
        headers: {
            contentType: 'application/json',
            'x-api-key': token,
        },
    });
};

// 上傳圖片
export const postImagesUploadAPI = (data, token) => {
    return requestHandler('POST', `/images/upload`, {
        data,
        headers: {
            contentType: 'application/json',
            'x-api-key': token,
        },
    });
};

// 刪除圖片
export const deleteImageAPI = (data, token) => {
    return requestHandler('DELETE', `/images/${data.imageId}`, {
        data,
        headers: {
            contentType: 'application/json',
            'x-api-key': token,
        },
    });
};

// 設定圖片最愛
export const postFavouritesAPI = (data, token) => {
    return requestHandler('POST', `/favourites`, {
        data,
        headers: {
            contentType: 'application/json',
            'x-api-key': token,
        },
    });
};

// 移除圖片最愛
export const deleteFavouritesAPI = (data, token) => {
    return requestHandler('DELETE', `/favourites/${data.favoriteId}`, {
        headers: {
            contentType: 'application/json',
            'x-api-key': token,
        },
    });
};
