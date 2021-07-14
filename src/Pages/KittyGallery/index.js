import React, { useEffect } from 'react';
import { withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import { withAuthConsumer } from 'Context/Auth';
import { withPopWindowConsumer } from 'Context/PopWindow';
import GoHome from 'Component/GoHome';
import GarellyLogin from 'Pages/KittyGallery/Login';
import { galleryRoutes } from 'Config/routes';
import kittyAvatar from 'image/kittyGarelly_avatar.jpg';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const KittyGallery = ({ location, history, authData, popWindowData }) => {
    const { isLogin, changeLoginStatusFunc } = authData;
    const { openPopWindowFunc } = popWindowData;

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
                <Link to="/kittyGallery/galleryList">貓貓 Garelly</Link>
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
                                        changeLoginStatusFunc();
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
                                openPopWindowFunc({ popContent: <GarellyLogin /> });
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

export default withRouter(withAuthConsumer(withPopWindowConsumer(KittyGallery)));
