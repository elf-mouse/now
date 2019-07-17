import Home from '@/views/home';
import NotFound from '@/views/not-found';
import Item from '@/views/media/item';

let baseRoutes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/'
  },
  {
    path: '/media/item/:id',
    name: 'media.item',
    component: Item
  },
  {
    path: '*',
    component: NotFound
  }
];

export default baseRoutes;
