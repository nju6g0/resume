import Home from 'Pages/Home';
import Excel from 'Pages/Excel';
import DrinkOrder from 'Pages/DrinkOrder';
import KittyGallery from 'Pages/KittyGallery';
import GarellyUpload from 'Pages/KittyGallery/Upload';
import GarellyFavorite from 'Pages/KittyGallery/Favorite';
import GarellyLogin from 'Pages/KittyGallery/Login';
import GarellyList from 'Pages/KittyGallery/List';
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
        key: 'kittyGallery',
        path: '/kittyGallery',
        exact: false,
        component: KittyGallery,
    },
    {
        key: 'comingsoon',
        path: '/comingsoon',
        exact: false,
        component: Sample,
    },
];

export const galleryRoutes = [
    {
        key: 'galleryList',
        path: '/kittyGallery/galleryList',
        exact: false,
        component: GarellyList,
    },
    {
        key: 'galleryLogin',
        path: '/kittyGallery/galleryLogin',
        exact: false,
        component: GarellyLogin,
    },
    {
        key: 'galleryFavorite',
        path: '/kittyGallery/galleryFavorite',
        exact: false,
        component: GarellyFavorite,
    },
    {
        key: 'galleryUpload',
        path: '/kittyGallery/galleryUpload',
        exact: false,
        component: GarellyUpload,
    },
];
