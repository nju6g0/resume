import React, {useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { withPopWindowConsumer } from 'Context/PopWindow';
import PopContent from './PopContent';
import { slideData } from '../datas';

import classes from '../styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Experience = ({ popWindowData }) => {
    const [slidePosition, setSlidePosition] = useState(0);
    const { openPopWindowFunc } = popWindowData;

    const slideDistance = 300 + 20;
    const showSlideNum = 3;


    const goSlide = (index) => {
        const position =
            index <= 0 ? 0 : index >= slideData.length - showSlideNum ? slideData.length - showSlideNum : index;
        setSlidePosition(position);
    };

    return(
    <section className={`${cx('totoro')} row gx-0`}>
        <div className="col-4" />
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
    )
}

export default withPopWindowConsumer(Experience);