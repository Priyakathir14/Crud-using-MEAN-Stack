import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }

  getProducts() {
    var url = 'http://localhost:3000/product/getMobiles';
    return this.http.get(url)
      .pipe(map((res: Response) => { return res;} ));
  }

  addProducts(newProduct) {
    const headers = new HttpHeaders();
    headers.append('content-Type', 'application/json' );
    var url='http://localhost:3000/product/addMobiles';
    return this.http.post(url , newProduct, { headers: headers })
      .pipe(map((res: Response) => { 
     return res;}));
  }
  deleteProducts(id) {
    var url = 'http://localhost:3000/product/mobile/'+id;
    return this.http.delete(url)
      .pipe(map((res: Response) => { return res;} ));
  }
  updateProducts(id,prod) {
    var url = 'http://localhost:3000/product/mobile/'+id;
    return this.http.put(url,prod)
      .pipe(map((res: Response) => { return res;} ));
  }
}
