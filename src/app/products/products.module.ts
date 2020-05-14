import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './containers/products/products.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductFormComponent } from './containers/product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
