import React from 'react';

import mainPic from 'image/home_section_2.jpg';
import classes from '../styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const AboutMe = () => {
    return(
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
                    list，在一次偶然的機會下接觸到前端這個陌生的領域，開始於網路資源自學html及css，為了更有系統的學習相關知識，決定到資策會接受訓練。也說不上來前端的魅力在哪裡，就是很享受把一個想法具象成有功能網站的過程，並從中獲得滿滿的成就感；入坑兩年多以來，雖然時不時就會陷入「我是誰？這是哪？在幹嘛？」的錯覺，但很喜歡這種每隔一段時間就感覺到自己進步的狀態；然後，期許自己有一天能很驕傲的大聲說出：「我是一個前端開發者。」
                    <br />
                    <br />
                </p>
            </article>
        </div>
    </section>
    )
}

export default AboutMe;
