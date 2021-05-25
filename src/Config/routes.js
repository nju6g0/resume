import Home from 'Pages/Home';
import Excel from 'Pages/Excel';
import DrinkOrder from 'Pages/DrinkOrder';
import Sample from 'Pages/emptyPage';

export const routes = [
    {
        key: 'home',
        path: '/home',
        exact: false,
        component: Home,
    },
    {
        key: 'drinkorder',
        path: '/drinkorder',
        exact: false,
        component: DrinkOrder,
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
