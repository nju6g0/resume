import Home from 'Pages/Home';
import Excel from 'Pages/Excel';
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
        key: 'excel',
        path: '/excel',
        exact: false,
        component: Excel,
    },
    {
        key: 'stock',
        path: '/stock',
        exact: false,
        component: Sample,
    },
];
