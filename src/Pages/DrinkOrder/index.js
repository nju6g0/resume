import React, { useState } from 'react';

import Add from './Add';
import List from './List';
import GoHome from 'Component/GoHome';
import { orderList } from './datas';

import { BsChevronDoubleRight, BsPlusCircle } from 'react-icons/bs';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export const OrderContext = React.createContext();

const DrinkOrder = () => {
    const [listData, setListData] = useState([...orderList]);

    const routes = [
        {
            key: 'add',
            component: <Add />,
            button: '看看大家點什麼',
            icon: <BsChevronDoubleRight />,
            goMode: 'list',
        },
        {
            key: 'list',
            component: <List />,
            button: '我要跟團',
            icon: <BsPlusCircle />,
            goMode: 'add',
        },
    ];
    const [mode, setMode] = useState('list');

    const providerData = {
        listData,
        addListFunc: (obj) => {
            setListData((prevState) => [...prevState, obj]);
        },
        updateListFunc: (key, obj) => {
            listData.find((order) => order.id === key).list.push(obj);
            setListData(listData);
        },
    };

    return (
        <OrderContext.Provider value={providerData}>
            <div className={cx('drinkorder')}>
                <div className={cx('container')}>
                    <div
                        className={cx('button')}
                        onClick={() => {
                            setMode(routes.find((el) => el.key === mode).goMode);
                        }}
                    >
                        {routes.find((el) => el.key === mode).button}
                        {routes.find((el) => el.key === mode).icon}
                    </div>
                    <div className={cx('content')}>{routes.find((el) => el.key === mode).component}</div>
                </div>
                <GoHome />
            </div>
        </OrderContext.Provider>
    );
};

export default DrinkOrder;
