import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map((params: Params) => params.id),
      flatMap(id => this.productsService.one(id))
    ).subscribe(product => this.product = product);
  }

  delete(): void {
    if (confirm(`Delete ${this.product.name}?`)) {
      this.productsService.delete(this.product.id).subscribe(res => this.router.navigateByUrl('/products'));
    }
  }
}
