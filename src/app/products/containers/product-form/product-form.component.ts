import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: [null, Validators.required],
    price: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.form.valid) {
      this.productsService.save(this.form.value).subscribe(res => this.router.navigateByUrl('/products'));
    }
  }
}
