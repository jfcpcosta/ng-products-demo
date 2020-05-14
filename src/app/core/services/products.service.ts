import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>('/products');
  }

  one(id: number): Observable<Product> {
    return this.http.get<Product>(`/products/${id}`);
  }

  save(product: Product): Observable<Product> {
    if (product.id) {
      return this.http.put<Product>(`/products/${product.id}`, product);
    }
    return this.http.post<Product>('/products', product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`/products/${id}`);
  }
}
