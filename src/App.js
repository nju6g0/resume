import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { routes } from 'Config/routes';
import { withPopWindowProvider } from 'Context/PopWindow';
import { withAuthProvider } from 'Context/Auth';
import PopWidnow from 'Component/PopWindow';

function App() {
    return (
        <Fragment>
            {/* <header>header</header> */}
            <Helmet>
                <meta property="og:url" content="https://master.d91po6eifpl24.amplifyapp.com/home" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YiShan's Resume" />
                <meta property="og:description" content="歡迎！這裡不一定會放什麼東西，完全看心情而定，有可能是做筆記用、練習有的沒有，但更多的是看到漂亮的版想試切看看而已~" />
                <meta property="og:image" content="https://i.imgur.com/D9cZHL7.png" />
            </Helmet>
            <main>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                key={`route_${route.key}`}
                                path={route.path}
                                exact={route.exact}
                                render={(routeProps) => <route.component />}
                            />
                        ))}
                        <Route render={() => <Redirect to="/home" />} />
                    </Switch>
                </BrowserRouter>
            </main>
            <footer style={{ textAlign: 'center' }}>◎ 2022 YiShan, Su / Thank you for coming.</footer>
            <PopWidnow />
        </Fragment>
    );
}

export default withAuthProvider(withPopWindowProvider(App));
