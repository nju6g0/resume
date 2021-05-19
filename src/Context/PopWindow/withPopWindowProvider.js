import React, { useState } from 'react';
import { Provider } from './Context';

const withPopWindowProvider = (WrappedComponent) => {
    const WithPopWindowProvider = () => {
        const openPopWindowFunc = ({ title, popContent, buttons }) => {
            setPopWindowData((prevState) => ({
                ...prevState,
                isOpenPopWindow: true,
                title,
                popContent,
                buttons,
            }));
        };
        const closePopWindowFunc = () => {
            setPopWindowData((prevState) => ({
                ...prevState,
                isOpenPopWindow: false,
            }));
        };
        const [popWindowData, setPopWindowData] = useState({
            isOpenPopWindow: false,
            openPopWindowFunc,
            closePopWindowFunc,
            title: '',
            popContent: null,
            buttons: [],
        });
        return (
            <Provider value={popWindowData}>
                <WrappedComponent />
            </Provider>
        );
    };
    return WithPopWindowProvider;
};
export default withPopWindowProvider;
