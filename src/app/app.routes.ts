import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AddProduct } from './pages/add-product/add-product';
import { Settings } from './components/settings/settings';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'add-product',
    component: AddProduct,
  },
  {
    path: 'settings',
    component: Settings,
  },
  {
    path: 'login',
    component: Login,
  },
];
