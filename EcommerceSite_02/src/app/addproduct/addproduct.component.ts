import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductCategory } from '../utilities/productCategory';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  catName: Array<{ CatName: string }> = [];

  addProductForm: FormGroup;
  constructor(private fb: FormBuilder, private Object: ProductService) {

  }

  addProductResponse;
  getAllProductsResponse;
  uniqueProductID;
  ProductID = {};
  ngOnInit() {
    this.ProductID = localStorage.getItem('ProductID');
    this.addProductForm = this.fb.group({
      productId: new FormControl(this.ProductID, [
      ]),
      productName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(200)
      ]),
      productDescription: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(200)
      ]),
      productURL: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
      productPrice: new FormControl('', [
        Validators.required
      ])
    })
    this.catName = ProductCategory.categories;
  }

  get productName() {
    return this.addProductForm.get('productName');
  }
  get productDescription() {
    return this.addProductForm.get('productDescription');
  }
  get productURL() {
    return this.addProductForm.get('productURL');
  }
  get productPrice() {
    return this.addProductForm.get('productPrice');
  }
  get category() {
    return this.addProductForm.get('category');
  }
  onSubmitAddProduct(addProductForm) {
    console.log(addProductForm.value);
    this.Object.addProduct(addProductForm.value).subscribe((response) => {
      this.addProductResponse = response;
      console.log(this.addProductResponse);
      if (this.addProductResponse.status) {
        alert("Product Added Successfully");
        this.addProductForm.reset();
        this.Object.getAllProducts().subscribe((response) => {
          this.getAllProductsResponse = response;
          this.uniqueProductID = this.getAllProductsResponse.length;
          this.uniqueProductID = this.uniqueProductID + 1;
          localStorage.setItem('ProductID', this.uniqueProductID);
          window.location.reload();
        })
      } else {
        alert("Some issue while adding product");
      }
    })
  }
}
