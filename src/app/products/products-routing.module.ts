import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { ProductFormComponent } from './containers/product-form/product-form.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: ':id/edit', component: ProductFormComponent },
  { path: ':id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
