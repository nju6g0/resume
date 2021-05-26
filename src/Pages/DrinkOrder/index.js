import React, { useState, useRef, useEffect } from 'react';

import Add from './Add';
import Edit from './Edit';
import List from './List';
import GoHome from 'Component/GoHome';
import { orderList } from './datas';
import addbcg from 'image/drinkorder/background_add.jpg';
import listbcg from 'image/drinkorder/background_list.jpg';

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
            bcgImg: addbcg,
            button: '看看大家點什麼',
            icon: <BsChevronDoubleRight />,
            goMode: 'list',
        },
        // {
        //     key: 'edit',
        //     component: <Edit />,
        //     bcgImg: addbcg,
        //     button: '看看有哪些團',
        //     icon: <BsChevronDoubleRight />,
        //     goMode: 'list',
        // },
        {
            key: 'list',
            component: <List />,
            bcgImg: listbcg,
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
            console.log(obj);
        },
    };

    return (
        <OrderContext.Provider value={providerData}>
            <div
                className={cx('drinkorder')}
                // style={{
                //     backgroundImage: `url(${routes.find((el) => el.key === mode).bcgImg})`,
                // }}
            >
                <div className={cx('container')}>
                    {/* style={{ width: mode === 'list' ? '50%' : '30%' }} */}
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
