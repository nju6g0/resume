import React, { useState, useRef, useEffect } from 'react';
import { withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import { withAuthConsumer } from 'Context/Auth';
import GoHome from 'Component/GoHome';
import { galleryRoutes } from 'Config/routes';
import kittyAvatar from 'image/kittyGarelly/avatar.jpg';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const KittyGallery = ({ location, history, authData }) => {
    // const { isLogin, changeLoginStatusFunc } = authData;
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (!isLogin) {
            history.push({
                ...location,
                pathname: galleryRoutes[0].path,
            });
        }
    }, [isLogin]);

    return (
        <div className={cx('kittyGallery')}>
            <nav>
                <h3>貓貓 Garelly</h3>
                <div>
                    {isLogin ? (
                        <div className={cx('menu')}>
                            <div className={cx('avatar')}>
                                <img src={kittyAvatar} alt="avatar" />
                            </div>
                            <ul>
                                <li>
                                    <Link to="/kittyGallery/galleryFavorite">my favorite</Link>
                                </li>
                                <li>
                                    <Link to="/kittyGallery/galleryUpload">my upload</Link>
                                </li>
                                <li
                                    onClick={() => {
                                        setIsLogin(false);
                                    }}
                                >
                                    log out
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(true);
                            }}
                        >
                            login
                        </button>
                    )}
                </div>
            </nav>
            <main>
                <Switch>
                    {galleryRoutes.map((route) => (
                        <Route
                            key={`route_${route.key}`}
                            path={route.path}
                            exact={route.exact}
                            render={(routeProps) => <route.component />}
                        />
                    ))}
                    <Route render={() => <Redirect to={galleryRoutes[0].path} />} />
                </Switch>
            </main>
            <GoHome />
        </div>
    );
};

export default withRouter(withAuthConsumer(KittyGallery));
