import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Main from './Main';
import AboutMe from './AboutMe';
import Portfolios from './Portfolios';
import Experience from './Experience';
import Totoro from './Totoro';


const Home = () => {
    return (
        <Fragment>
            <Main />
            <AboutMe />
            <Portfolios />
            <Experience />
            <Totoro />
        </Fragment>
    );
};

export default withRouter(Home);
