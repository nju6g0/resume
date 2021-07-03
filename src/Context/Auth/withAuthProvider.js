import React, { useState } from 'react';

import { Provider } from './Context';

const withAuthProvider = (WrappedComponent) => {
    const WithAuthProvider = () => {
        const storageKey = 'auth';
        const changeLoginStatus = (obj = { isLogin: false, token: null }) => {
            if (obj.isLogin) {
                sessionStorage.setItem(storageKey, JSON.stringify(obj));
            } else {
                sessionStorage.removeItem(storageKey);
            }
            setAuthData((prevState) => ({
                ...prevState,
                isLogin: obj.isLogin,
                token: obj.token,
            }));
        };

        const [authData, setAuthData] = useState({
            isLogin: sessionStorage.getItem(storageKey)
                ? JSON.parse(sessionStorage.getItem(storageKey)).isLogin
                : false,
            token: sessionStorage.getItem(storageKey) ? JSON.parse(sessionStorage.getItem(storageKey)).token : null,
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
