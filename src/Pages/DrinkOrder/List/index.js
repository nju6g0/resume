import React, { useState, useRef, useEffect, useContext } from 'react';

import { OrderContext } from '../index';
import { memberList, menu, iceOptions, sugarOptions, otherOptions } from '../datas';

import classes from '../styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const List = () => {
    const { listData } = useContext(OrderContext);
    const [nowShowId, setNowShowId] = useState(listData[0].id);

    // useEffect(() => {
    //     console.log(listData);
    // }, []);
    return (
        <div className={cx('list')}>
            <select
                onChange={(e) => {
                    setNowShowId(e.target.value);
                }}
            >
                {listData.map((order) => (
                    <option id={order.id} value={order.id}>{`${order.date} (${menu[order.key].name})`}</option>
                ))}
            </select>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">姓名</th>
                        <th scope="col">品項</th>
                        <th scope="col">杯數</th>
                        <th scope="col">金額</th>
                        <th scope="col">甜度</th>
                        <th scope="col">冰塊</th>
                        <th scope="col">其它</th>
                    </tr>
                </thead>
                <tbody>
                    {listData
                        .find((el) => el.id === nowShowId)
                        .list.map((item, idx) => (
                            <tr id={`order_${idx}`}>
                                {/* <th scope="row">{memberList.find((mem) => mem.no === item.member).name}</th> */}
                                <th scope="row">{item.memberName}</th>
                                <td>
                                    {
                                        menu[listData.find((el) => el.id === nowShowId).key].menu.find(
                                            (drink) => drink.key === item.item
                                        ).itemName
                                    }
                                </td>
                                <td>{item.unit}</td>
                                <td>{item.price}</td>
                                <td>{sugarOptions.find((sugar) => sugar.key === item.sugar).text}</td>
                                <td>{iceOptions.find((ice) => ice.key === item.ice).text}</td>
                                <td>
                                    {item.other.map((element) => (
                                        <span>{otherOptions.find((el) => el.key === element).text},</span>
                                    ))}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
