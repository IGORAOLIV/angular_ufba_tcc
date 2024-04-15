import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdItemPageComponent } from './components/prod-item-page/prod-item-page.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'prod-page', component: ProdItemPageComponent },
  { path: 'products', component: ProductsComponent },
];
