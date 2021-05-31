import React, { useState, useRef, useEffect, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { withPopWindowConsumer } from 'Context/PopWindow';
import { portfolios, slideData } from './datas';
import mainPic from 'image/home/main.jpg';
import PopContent from './PopContent';

import { BsChatSquareQuote, BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Home = ({ popWindowData }) => {
    const widthRef = useRef(null);
    const { openPopWindowFunc } = popWindowData;
    const [width, setWidth] = useState('0');

    const slideDistance = 300 + 20;
    const showSlideNum = 3;
    const [slidePosition, setSlidePosition] = useState(0);

    const resizeHandler = () => {
        const changeWidth = () => {
            if (widthRef.current?.clientWidth > 768) {
                setWidth(widthRef.current.clientWidth);
            }
        };
        window.addEventListener('resize', changeWidth);
    };

    const goSlide = (index) => {
        const position =
            index <= 0 ? 0 : index >= slideData.length - showSlideNum ? slideData.length - showSlideNum : index;
        setSlidePosition(position);
    };

    useEffect(() => {
        resizeHandler();
        setWidth(widthRef.current.clientWidth);
    }, [widthRef.current?.clientWidth]);

    return (
        <Fragment>
            <section className={cx('main')}>
                <div className="container">
                    <h1>
                        我<br />是<br />胖<br />虎<br />我<br />是<br />孩<br />子<br />王<br />
                    </h1>
                </div>
            </section>
            <section className={cx('introduction')}>
                <div className="row gx-0">
                    <div className="col-12 col-md-6">
                        <img src={mainPic} alt="" />
                    </div>
                    <article className="col-12 col-md-6 col-lg-4">
                        <h2 className="mt-4 mt-md-0 text-center">About Me</h2>
                        <p>
                            嗨！謝謝你來到這裡，接下來會是關於我的一些些介紹(或是自言自語？)，如果沒有興趣就可以跳過繼續往下滑了(笑)。
                            <br />
                            <br />
                            非本科系出身，是個從初會唸到高會的標準商學生，畢業後高考錄取成為人人稱羨的公務員。每每講到這裡，十個人裡面有九個都問：你怎麼這麼想不開？（剩下那一個是聽不懂中文）。也沒什麼，就是某天看著隔壁的同事，深深覺得如果到40歲我一定會跟哆啦A夢借時光機敲暈10年前的自己；然後，毅然決然地告別這種「每天起床不是想請假就是想辭職」的日子。雖然有點荒唐，但目前為止不後悔這個決定(只是偶爾會覺得自己是不是很奇怪)。當時的我怎麼也想不到自己會踏進這條不歸路，畢竟我連計算機概論都不認識啊！
                            <br />
                            <br />
                            辭職之後，開始清查人生的 todo
                            list，在因緣際會之下接觸到前端這個陌生的領域，在網路資源自學html及css，為了更有系統的學習決定到資策會接受訓練。也說不上來前端的魅力在哪裡，但就是很享受把一個想法具象成有功能網站的過程，並從中獲得滿滿的成就感；然後，期許自己有一天能像胖虎一樣，很驕傲的大聲說出：「我是一個前端開發者。」(題外話，不覺得胖虎很威嗎？怎麼會有人如此有自信地封自己為孩子王。)
                            <br />
                            <br />
                        </p>
                    </article>
                </div>
            </section>
            <section className={cx('portfolios')}>
                <div ref={widthRef} className="container">
                    <h2 className="text-center">PORTFOLIOS</h2>
                    <div className={`${cx('content')} d-flex flex-wrap`}>
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
                </div>
            </section>
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
                    </ul>
                </div>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-6">
                    <h3>訓練/經歷</h3>
                    <ul>
                        <li>
                            和泰聯網股份有限公司，前端工程師，Mar 2021 ~ 迄今(在職中)。
                            <br />
                            <small>以 React 撰寫 yoxi 企業簽單後台管理系統。</small>
                        </li>
                        <li>
                            緯創軟體股份有限公司，前端工程師，Mar 2020 ~ Mar 2021。
                            <br />
                            <small>參與Acer 電競社群平台 Planet9網站開發，以 React 撰寫前端頁面。</small>
                        </li>
                        <li>
                            精誠資訊股份有限公司，前端工程師，Jul 2019 ~ Mar 2020。
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
                        <small>點選按鈕，前往完整履歷及參與專案介紹</small>
                    </div>
                </div>
            </section>
            <section className={`${cx('slider')} row gx-0`}>
                <div className="col-4"></div>
                <div className="col-md-8">
                    <h3 className={`${cx('line')} mb-3 pb-2`}>那些你不知道的龍貓</h3>
                    <p>
                        每個人心中都有一隻大龍貓(となりのトトロ)
                        <br />
                        ／／
                        <br />
                        1988年，大家耳熟能詳的鄰居--龍貓，誕生於日本大螢幕，
                        <br />
                        這個龐然大物，細膩地溫暖著觀眾，
                        <br />
                        然而關於這部耳熟能詳的經典巨作，你了解多少呢？
                        <br />
                        讓我們一起來一探究竟吧！
                        <br />
                        ／／
                        <br />
                        小月、小梅兩姊妹跟著爸爸一起搬到郊外居住，準備迎接即將出院的母親，
                        <br />
                        那個被戲稱「鬼屋」的新家發生許多神奇的事，
                        <br />
                        包含會突然四散逃走的灰塵精靈，以及神祕的龍貓與貓巴士。
                        <br />
                        不論好壞，我們都將成為新的樣子。
                        <br />
                        有一天，小梅在與姊姊小月吵架後失蹤了，小月只能尋求龍貓的幫助，展開一場尋找妹妹的奇幻冒險…
                    </p>
                    <div className={`${cx('circles')} d-flex mb-3 mt-5`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`${cx('sliderBox')}`}>
                        <div
                            className={cx('arrow', 'prev', slidePosition === 0 ? 'hidden' : '')}
                            onClick={() => {
                                goSlide(slidePosition - 1);
                            }}
                        >
                            <BsChevronCompactLeft />
                        </div>
                        <div
                            className={`${cx('container')} d-flex`}
                            style={{ left: `-${slidePosition * slideDistance}px` }}
                        >
                            {slideData.map((slide, idx) => (
                                <div
                                    className={`${cx('imgBox')} flex-shrink-0`}
                                    key={`slide_${idx}`}
                                    onClick={() => {
                                        openPopWindowFunc({ popContent: <PopContent data={slide} /> });
                                    }}
                                >
                                    <div>
                                        <img src={slide.image} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className={cx(
                                'arrow',
                                'next',
                                slidePosition >= slideData.length - showSlideNum ? 'hidden' : ''
                            )}
                            onClick={() => {
                                goSlide(slidePosition + 1);
                            }}
                        >
                            <BsChevronCompactRight />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <div>
                    <p>此網站圖片資源來自：</p>
                    <div className="row">
                        <p className="col-4">freepik (https://www.freepik.com/)</p>
                        <p className="col-4">Unsplash (https://unsplash.com/)</p>
                        <p className="col-4">STUDIO GHIBLI (https://www.ghibli.jp/info/013344/)</p>
                    </div>
                </div>
                <div></div>
            </section> */}
        </Fragment>
    );
};

export default withRouter(withPopWindowConsumer(Home));
