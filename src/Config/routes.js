import Home from 'Pages/Home';
import Excel from 'Pages/Excel';
import DrinkOrder from 'Pages/DrinkOrder';
import KittyGallery from 'Pages/KittyGallery';
import GarellyUpload from 'Pages/KittyGallery/Upload';
import GarellyFavorite from 'Pages/KittyGallery/Favorite';
import GarellyList from 'Pages/KittyGallery/List';
import Sample from 'Pages/emptyPage';
import Animation from 'Pages/Animation';
import TheF2E from 'Pages/TheF2E';

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
        key: 'thef2e',
        path: '/thef2e',
        exact: false,
        component: TheF2E,
    },
    {
        key: 'animation',
        path: '/animation',
        exact: false,
        component: Animation,
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
