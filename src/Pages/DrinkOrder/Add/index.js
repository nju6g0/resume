import React, { useState, useContext } from 'react';

import { OrderContext } from '../index';
import { menu, iceOptions, sugarOptions, otherOptions } from '../datas';

import classes from '../styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Add = () => {
    const { listData, updateListFunc } = useContext(OrderContext);
    const [nowShowId, setNowShowId] = useState(listData[0].id);
    const [formContent, setFormContent] = useState({
        memberName: '',
        item: menu[listData.find((el) => el.id === nowShowId).key].menu[0].key,
        price: menu[listData.find((el) => el.id === nowShowId).key].menu[0].price,
        unit: 1,
        ice: 0,
        sugar: 0,
        other: [],
    });
    const [errMessage, setErrMessage] = useState({
        memberName: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState({
        isShow: false,
        info: '訂單完成。到時一手交錢，一手交飲料！',
    });

    const getMenuList = () => {
        return menu[listData.find((el) => el.id === nowShowId).key].menu;
    };

    const saveValue = (key, obj) => {
        const { value } = obj;
        setFeedback((prevState) => ({
            ...prevState,
            isShow: false,
        }));
        setFormContent((prevState) => ({
            ...prevState,
            [key]: value,
        }));
        setErrMessage((prevState) => ({
            ...prevState,
            [key]: obj.value.length > 0 ? '' : '請填寫這個欄位',
        }));
    };

    const sendForm = () => {
        const results = [];
        Object.keys(formContent).forEach((key) => {
            const isInValid = key !== 'other' && formContent[key].toString().length === 0;
            if (isInValid) {
                setErrMessage((prevState) => ({
                    ...prevState,
                    [key]: '請填寫這個欄位',
                }));
            }
            results.push(isInValid);
        });
        if (!results.some((result) => result)) {
            setIsLoading(true);
            updateListFunc(nowShowId, formContent);
            window.setTimeout(() => {
                setFeedback((prevState) => ({
                    ...prevState,
                    isShow: true,
                }));
                setIsLoading(false);
            }, 2 * 1000);
        }
    };

    return (
        <div className={cx('add')}>
            {feedback.isShow && <div className={cx('feedback')}>{feedback.info}</div>}
            <form>
                <select
                    onChange={(e) => {
                        setNowShowId(e.target.value);
                        setFormContent((prevState) => ({
                            ...prevState,
                            item: menu[listData.find((el) => el.id === e.target.value).key].menu[0].key,
                            price: menu[listData.find((el) => el.id === e.target.value).key].menu[0].price,
                            unit: 1,
                        }));
                        setFeedback((prevState) => ({
                            ...prevState,
                            isShow: false,
                        }));
                    }}
                >
                    {listData.map((order) => (
                        <option id={order.id} value={order.id}>{`${order.date} (${menu[order.key].name})`}</option>
                    ))}
                </select>
                <div>
                    <label>
                        姓名：<span>*</span>
                    </label>
                    <input
                        type="text"
                        value={formContent.memberName}
                        onChange={(e) => {
                            saveValue('memberName', e.target);
                        }}
                    />
                    <small className={cx('errMsg')}>{errMessage.memberName}</small>
                </div>
                <div>
                    <label>
                        品項：<span>*</span>
                    </label>
                    <select
                        onChange={(e) => {
                            saveValue('item', { value: e.target.value });
                            saveValue('unit', { value: 1 });
                            saveValue('price', {
                                value: getMenuList().find((el) => el.key === e.target.value).price * 1,
                            });
                        }}
                        value={getMenuList().find((el) => el.key === formContent.item).key}
                    >
                        {getMenuList().map((order) => (
                            <option id={order.key} value={order.key}>{`${order.itemName} ($ ${order.price})`}</option>
                        ))}
                    </select>
                </div>
                <div className="d-flex">
                    <div className="me-1">
                        <label>
                            數量：<span>*</span>
                        </label>
                        <input
                            type="number"
                            value={formContent.unit}
                            onChange={(e) => {
                                const value = +e.target.value <= 0 ? 1 : +e.target.value;
                                saveValue('unit', { value: value });
                                saveValue('price', {
                                    value: getMenuList().find((el) => el.key === formContent.item).price * value,
                                });
                            }}
                        />
                    </div>
                    <div className="ms-1">
                        <label>金額：</label>
                        <input type="number" disabled value={formContent.price} />
                    </div>
                </div>
                <div className="mb-2">
                    冰塊：
                    <br />
                    <div className="d-flex">
                        {iceOptions.map((ice) => (
                            <div key={`radio_ice_${ice.key}`} className="form-check me-3">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="iceRadio"
                                    id={`radio_ice_${ice.key}`}
                                    value={ice.key}
                                    onChange={() => {
                                        saveValue('ice', { value: ice.key });
                                    }}
                                    checked={ice.key === formContent.ice}
                                />
                                <label className="form-check-label" for={`radio_ice_${ice.key}`}>
                                    {ice.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-2">
                    甜度：
                    <br />
                    <div className="d-flex">
                        {sugarOptions.map((sugar) => (
                            <div key={`radio_sugar_${sugar.key}`} className="form-check me-3">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sugarRadio"
                                    id={`radio_sugar_${sugar.key}`}
                                    value={sugar.key}
                                    onChange={() => {
                                        saveValue('sugar', { value: sugar.key });
                                    }}
                                    checked={sugar.key === formContent.sugar}
                                />
                                <label className="form-check-label" for={`radio_sugar_${sugar.key}`}>
                                    {sugar.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-2">
                    其它：
                    <br />
                    <div className="d-flex">
                        {otherOptions.map((checkbox) => (
                            <div key={`checkbox_${checkbox.key}`} className="form-check me-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={checkbox.key}
                                    id={`checkbox_${checkbox.key}`}
                                    onChange={(e) => {
                                        let arr = formContent.other;
                                        if (e.target.checked) {
                                            arr.push(e.target.value);
                                        } else {
                                            arr = arr.filter((item) => item === e.target.value);
                                        }
                                        saveValue('other', { value: [...arr] });
                                    }}
                                />
                                <label className="form-check-label" for={`checkbox_${checkbox.key}`}>
                                    {checkbox.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-3 d-flex justify-content-end">
                    {isLoading ? (
                        <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <button type="button" className="btn btn-dark" onClick={sendForm}>
                            送出
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Add;
