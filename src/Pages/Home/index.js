import React, { useState, useRef, useEffect, Fragment } from 'react';

import mainPic from 'image/home/main.jpg';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Home = () => {
    return (
        <main>
            <section>section1</section>
            <section>
                <div className="row w-90">
                    <div className="col-12 col-md-6">
                        <img src={mainPic} alt="" />
                    </div>
                    <article className="col-12 col-md-6">
                        <h3 className="mt-4 mt-md-0 text-center">我是胖虎我是孩子王</h3>
                        <p>
                            度發進有生元後表臺流，海我又產離動備？
                            輪與子成開今這的子工少館沒場示體陽？是業山你選品經應第使正的夫；北斷低？對魚山戰是斷在動。有都育後是。校包養，深式間立房，界入過地養，是夜已？
                            十上不管可在每形分關這的，區司一。市流車在有事各；和際。
                            走萬的同而。力止安國法果一、義我還施方在愛天任書站北，物特得水習因得月，怕不中物合嗎此是他一新清得學銷水道不也獎舉為術持。雜年死機爸人轉：制拿樂白然官成；萬兒導定打花；手了完使念出理都作。如有史在來後北分。連全技，了正能操是戲成老，子金達知，調轉著！票銀策商買王新回如還裡小件主器金；方的之說業各他有著，此一而從覺成排全、毒正精……將深親離小選城，乎每歡當畫時位等我中夫……其雨族完……和們力們濟書！不是股個想越是算體量高念灣大容麼狀平……大現理舞何當人書
                        </p>
                        <p>
                            義當而子因天拿；求直以呢，走起推最就洋顯沒候了金爸？營知便校年。
                            會富格日氣成英史事洋花治玩答後能於了傳在解分了戲此費縣不現型我童比而黃來藝變麼過馬資過八音太士沒長……議高自的東提痛，氣己他向媽有念的成些登力落由之濟我！
                        </p>
                    </article>
                </div>
            </section>
            <section>section3</section>
            <section>section4</section>
            <section>section5</section>
        </main>
    );
};

export default Home;
