import { Routes } from '@angular/router';
import { Settings } from './components/settings/settings';
import { AddProduct } from './pages/add-product/add-product';
import { CategoryList } from './pages/category/category-list/category-list';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { AddCategory } from './pages/category/add-category/add-category';

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
  {
    path: 'admin/categories',
    component: CategoryList,
  },
  {
    path: 'admin/categories/add',
    component: AddCategory,
  },
];
