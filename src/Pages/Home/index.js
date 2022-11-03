import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Main from './Main';
import AboutMe from './AboutMe';
import Portfolios from './Portfolios';
import Experience from './Experience';
import Totoro from './Totoro';

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);


const Home = () => {
    return (
        <div className={cx("home")}>
            <Main />
            <AboutMe />
            <Portfolios />
            <Experience />
            <Totoro />
        </div>
    );
};

export default withRouter(Home);
