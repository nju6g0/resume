import React from "react";

import classes from '../styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Experience = () => {

    return(
    <section className={`${cx('experience')} row gx-0`}>
        <div className="col-12 col-md-5">
            <h3>技能相關</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3、SCSS</li>
                <li>JAVASCRIPT</li>
                <li>JQUERY</li>
                <li>BOOTSTRAP</li>
                <li>REACT</li>
                <li>REDUX, REDUX SAGA</li>
                <li>NEXT JS</li>
            </ul>
        </div>
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-6">
            <h3>訓練/經歷</h3>
            <ul>
                <li>
                    英屬維京群島商幫你優股份有限公司台灣分公司，前端工程師，Oct. 2021 ~ 。
                    <br />
                    <small>產品優化及功能開發。</small>
                </li>
                <li>
                    緯創軟體股份有限公司，前端工程師，Mar. 2020 ~ Mar. 2021。
                    <br />
                    <small>參與Acer 電競社群平台 Planet9網站開發，以 React 撰寫前端頁面。</small>
                </li>
                <li>
                    精誠資訊股份有限公司，前端工程師，Jul. 2019 ~ Mar. 2020。
                    <br />
                    <small>以 angular 撰寫臺灣銀行端末系統前端頁面(系統翻新)。</small>
                </li>
                <li>
                    財團法人資訊工業策進會辦理之「前端工程師就業養成班」
                    <br />
                    <small>(受訓期間：2018年12月27日~2019年6月5日)</small>
                </li>
            </ul>
            <div className={cx('goResume')}>
                <a href="https://www.cakeresume.com/nicole-su-359cbf" target="_blank" rel="noreferrer">
                    Cake Resume
                </a>
                <br />
                <br />
                <small>點選按鈕，前往完整履歷及參與專案介紹</small>
            </div>
        </div>
    </section>
    )
}

export default Experience;