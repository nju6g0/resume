import React, { useState, useRef, useEffect, useContext } from 'react';

import { OrderContext } from '../index';
import { memberList, menu, iceOptions, sugarOptions, otherOptions } from '../datas';

import classes from '../styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Add = () => {
    const { listData } = useContext(OrderContext);
    const [nowShowId, setNowShowId] = useState(listData[0].id);

    return (
        <div className={cx('add')}>
            <form>
                <select
                    onChange={(e) => {
                        setNowShowId(e.target.value);
                    }}
                >
                    {listData.map((order) => (
                        <option id={order.id} value={order.id}>{`${order.date} (${menu[order.key].name})`}</option>
                    ))}
                </select>
                <div>
                    <label>姓名：</label>
                    <input type="text" />
                </div>
                <div>
                    <label>品項：</label>
                    <select
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                    >
                        {menu[listData.find((el) => el.id === nowShowId).key].menu.map((order) => (
                            <option id={order.key} value={order.key}>{`${order.itemName} ($ ${order.price})`}</option>
                        ))}
                    </select>
                </div>
                <div className="d-flex">
                    <div className="me-1">
                        <label>數量：</label>
                        <input type="number" />
                    </div>
                    <div className="ms-1">
                        <label>金額：</label>
                        <input type="number" disabled />
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
                                />
                                <label className="form-check-label" for={`radio_sugar_${sugar.key}`}>
                                    {sugar.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Add;
