import Home from 'Pages/Home';
import Sample from 'Pages/emptyPage';

export const routes = [
    {
        key: 'home',
        path: '/home',
        exact: false,
        component: Home,
    },
    {
        key: 'home',
        path: '/messageBoard',
        exact: false,
        component: Sample,
    },
    {
        key: 'home',
        path: '/movies',
        exact: false,
        component: Sample,
    },
];
