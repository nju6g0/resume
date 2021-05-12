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
        key: 'messageBoard',
        path: '/messageBoard',
        exact: false,
        component: Sample,
    },
    {
        key: 'movies',
        path: '/movies',
        exact: false,
        component: Sample,
    },
    {
        key: 'stock',
        path: '/stock',
        exact: false,
        component: Sample,
    },
];
