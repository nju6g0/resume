import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { routes } from 'Config/routes';

function App() {
    return (
        <Fragment>
            <header>header</header>
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
            <footer>footer</footer>
        </Fragment>
    );
}

export default App;
