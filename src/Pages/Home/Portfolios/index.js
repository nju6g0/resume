import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BsChatSquareQuote } from 'react-icons/bs';

import { portfolios } from '../datas';
import classes from '../styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Portfolios = () => {
    const widthRef = useRef(null);
    const [width, setWidth] = useState('0');

    const resizeHandler = () => {
        const changeWidth = () => {
            if (widthRef.current?.clientWidth > 768) {
                setWidth(widthRef.current.clientWidth);
            }
        };
        window.addEventListener('resize', changeWidth);
    };

    useEffect(() => {
        resizeHandler();
        setWidth(widthRef.current.clientWidth);
    }, [widthRef.current?.clientWidth]);

    return(
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
    )
}

export default Portfolios;