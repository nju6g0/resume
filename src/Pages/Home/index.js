import React, { useState, useRef, useEffect, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

import mainPic from 'image/home/main.jpg';
import section3bcg from 'image/home/section_3.jpg';
import message_borad from 'image/home/portfolios/message_board.jpg';
import movies from 'image/home/portfolios/movies.jpg';

import { BsChatSquareQuote } from 'react-icons/bs';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Home = () => {
    const widthRef = useRef(null);
    const portfolios = [
        { id: 'messageBoard', title: 'message board', description: '表單處理', image: message_borad },
        { id: 'movies', title: '那些最愛的電影們', description: 'excel檔案讀取', image: movies },
        { id: 2, title: '還沒想到要做什麼', description: '還沒想到要做什麼', image: null },
        { id: 3, title: '還沒想到要做什麼', description: '還沒想到要做什麼', image: null },
    ];
    const [width, setWidth] = useState('0');

    const resizeHandler = () => {
        const changeWidth = () => {
            if (widthRef.current.clientWidth > 768) {
                setWidth(widthRef.current.clientWidth);
            }
        };
        window.addEventListener('resize', changeWidth);
    };

    useEffect(() => {
        resizeHandler();
        setWidth(widthRef.current.clientWidth);
    }, [widthRef.current?.clientWidth]);

    return (
        <main id="main" ref={widthRef}>
            <section>
                <h1>
                    我<br />是<br />胖<br />虎<br />我<br />是<br />孩<br />子<br />王<br />
                </h1>
                {/* <div className={cx('button')}>我是一顆按鈕</div> */}
            </section>
            <section>
                <div className="row w-90">
                    <div className="col-12 col-md-6">
                        <img src={mainPic} alt="" />
                    </div>
                    <article className="col-12 col-md-6">
                        <h3 className="mt-4 mt-md-0 text-center">我是胖虎我是孩子王</h3>
                        <p>
                            嗯哼，你沒看錯，左邊那張圖片不是我，是免費資源裡某個天真無邪的小傢伙，我們感謝他。言歸正傳，這是我的自我介紹，非本科系出身，是個從初會唸到高會的標準商學生，畢業後高考錄取成為人人稱羨的公務員。每每講到這裡，十個人裡面有九個都問：你怎麼這麼想不開？（剩下那一個是聽不懂中文）。也沒什麼，就是某天看著隔壁的同事，深深覺得如果到40歲我一定會跟哆啦A夢借時光機敲暈10年前的自己；然後，毅然決然地告別這種「每天起床不是想請假就是想辭職」的日子。就是這麼任性，不要懷疑（在這裡先讓我感謝一下我的父母，感謝他們把自己照顧得很好，才能讓我這樣虎搞瞎搞）。至於為什麼會踏入前端這個坑，那又是另一個故事了。
                        </p>
                        <p>
                            嗯？你說標題是怎麼回事？喔，就是覺得這句話很威，所以放上去了。「我是胖虎，我是孩子王。」-剛田武；「我是壹ㄙㄤ，我是前端開發者。」-蘇怡姍。
                        </p>
                    </article>
                </div>
            </section>
            <section>
                <h2 className="text-center">PORTFOLIOS</h2>
                <div className={`${cx('portfolios')} d-flex flex-wrap`}>
                    {portfolios.map((portfolio, idx) => (
                        <Link
                            to={`/${portfolio.id}`}
                            key={`portfolios_${portfolio.id}`}
                            style={{ height: width * 0.5 }}
                        >
                            <img
                                src={portfolio.image || `https://picsum.photos/400/400?random=${idx * 1}`}
                                alt={portfolio.title}
                            />
                            <div className="row">
                                <div className="col-8">
                                    <h5>{portfolio.title}</h5>
                                    <p>{portfolio.description}</p>
                                </div>
                                <span className="col-4 text-end">
                                    <BsChatSquareQuote /> go page
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="row">
                <div className="col-12 col-md-6">
                    <h3>沒有名字的貓</h3>
                    <p>
                        我是貓，一隻沒有名字的貓。從來沒有人給過我一個名字。小時候，是隻「小貓」。長大了，就被叫做「貓」而已。街上那些貓，每隻都有名字。「好好喔！我也想要一個名字。」「自己取一個不就好了。找一個自己喜歡的名字啊。只是一隻貓的名字，到處看看，應該找得到的。」廟裡的貓無限壽說。
                    </p>
                    <div className={cx('button')}>我是一顆按鈕</div>
                </div>
                <div className="col-12 col-md-6"></div>
            </section>
            <section>
                {' '}
                <div className={cx('imgBox')}>
                    <img src={section3bcg} alt="" />
                </div>
            </section>
        </main>
    );
};

export default withRouter(Home);
