import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	products: any;
  	product: any;
  	data: any;
  	id: any;
  	MobileName: string;
  	Memory: any;
  	OS: string;
  	Color: string;
  	Price: number;
  	submitted = false;


  constructor(public fb: FormBuilder,private authService: AuthService ) { 
  this.product = { MobileName: '', Memory: '' ,OS: '', Color: '',Price: '',_id:''};
  	}
  public productForm = this.fb.group({
    MobileName: ['', Validators.required],
    Memory: ['', Validators.required],
    OS: ['', Validators.required],
    Color: ['', Validators.required],
    Price: ['', Validators.required]

  });
   get user() {
    return this.productForm.controls;
  }

  ngOnInit() {
  	this.authService.getProducts().subscribe(data => {
      console.log(JSON.stringify(data));
      this.products = data;
    });
  }
  add() {
  		this.submitted = true;
    	if (this.productForm.invalid) {
      		return;
    	}
       const newProduct = {
       MobileName: this.product.MobileName,
       Memory : this.product.Memory,
       OS : this.product.OS,
       Color : this.product.Color,
       Price : this.product.Price
    };
    console.log(newProduct);
    this.authService.addProducts(newProduct).subscribe(data => {
      alert(data['msg']);
      this.authService.getProducts().subscribe(data => {
        this.products = data;
      });
  });
  }
  delete(id) {
  	this.authService.deleteProducts(id).subscribe(data => {
        alert(data['msg']);
      this.authService.getProducts().subscribe(data => {
      this.products = data;
    });
    });
   }
   update(id) {
   	this.submitted = true;
    if (this.productForm.invalid) {
      	return;
   	}
     const prod = this.productForm.value;
    this.authService.updateProducts(id,prod).subscribe(data => {
        alert(data['msg']);
      this.authService.getProducts().subscribe(data => {
      this.products = data; 
    
      
      });
    });
    

}
	edit(product){
      this.product.MobileName = product.MobileName;
      this.product.Memory = product.Memory;
      this.product.OS = product.OS;
      this.product.Color = product.Color;
      this.product.Price = product.Price;
      this.product._id = product._id;
      window.scrollTo(0,0);


    }

}
