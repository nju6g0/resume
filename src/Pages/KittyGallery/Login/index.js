import React, { useState, useRef, useEffect } from 'react';

import { withAuthConsumer } from 'Context/Auth';
import { withPopWindowConsumer } from 'Context/PopWindow';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GarellyLogin = ({ authData, popWindowData }) => {
    const { changeLoginStatusFunc } = authData;
    const { closePopWindowFunc } = popWindowData;
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [feedback, setFeedback] = useState({
        isShow: false,
        message: '',
    });

    const saveValue = (key, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const sendForm = () => {
        const validValues = { username: 'yishan', password: '54413' };
        const results = [];
        Object.keys(formData).forEach((key) => {
            results.push(validValues[key] === formData[key]);
        });
        window.setTimeout(() => {
            if (results.every((el) => el)) {
                changeLoginStatusFunc({ isLogin: true });
                closePopWindowFunc();
            } else {
                setFeedback({
                    isShow: true,
                    message: '帳號/密碼錯誤',
                });
            }
            setIsLoading(false);
        }, 1 * 1000);
    };

    useEffect(() => {});

    return (
        <div className={cx('garellyLogin')}>
            {feedback.isShow && <div className={cx('feedback')}>{feedback.message}</div>}
            <div>
                <label>帳號： </label>
                <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => {
                        saveValue('username', e.target.value);
                    }}
                />
            </div>
            <div>
                <label>密碼：</label>
                <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => {
                        saveValue('password', e.target.value);
                    }}
                />
            </div>
            <button
                type="button"
                disabled={isLoading}
                onClick={() => {
                    setIsLoading(true);
                    sendForm();
                }}
            >
                {isLoading ? 'loading...' : '登入'}
            </button>
        </div>
    );
};

export default withAuthConsumer(withPopWindowConsumer(GarellyLogin));
