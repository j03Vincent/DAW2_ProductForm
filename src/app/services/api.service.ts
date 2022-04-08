import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>('https://my-json-server.typicode.com/j03Vincent/DAW2_ProductList/productList', data);
  }

  getProduct() {
    return this.http.get<any>('https://my-json-server.typicode.com/j03Vincent/DAW2_ProductList/productList');
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>('https://my-json-server.typicode.com/j03Vincent/DAW2_ProductList/productList' + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>('https://my-json-server.typicode.com/j03Vincent/DAW2_ProductList/productList' + id);
  }
}
