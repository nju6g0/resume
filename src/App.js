import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { routes } from 'Config/routes';

function App() {
    return (
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
    );
}

export default App;
