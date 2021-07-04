import React, { useState } from 'react';

import { Provider } from './Context';

const withAuthProvider = (WrappedComponent) => {
    const WithAuthProvider = () => {
        const storageKey = 'sdfghjk';
        const assets_token = '4742099d-dc42-4d3d-a4d0-ca077246a7d9';
        const changeLoginStatus = (obj = { isLogin: false }) => {
            if (obj.isLogin) {
                sessionStorage.setItem(storageKey, JSON.stringify(obj));
            } else {
                sessionStorage.removeItem(storageKey);
            }
            setAuthData((prevState) => ({
                ...prevState,
                isLogin: obj.isLogin,
                token: obj.isLogin ? assets_token : null,
            }));
        };

        const [authData, setAuthData] = useState({
            isLogin: sessionStorage.getItem(storageKey)
                ? JSON.parse(sessionStorage.getItem(storageKey)).isLogin
                : false,
            token: sessionStorage.getItem(storageKey) ? assets_token : null,
            changeLoginStatusFunc: (obj) => {
                changeLoginStatus(obj);
            },
        });

        return (
            <Provider value={authData}>
                <WrappedComponent />
            </Provider>
        );
    };
    return WithAuthProvider;
};

export default withAuthProvider;
