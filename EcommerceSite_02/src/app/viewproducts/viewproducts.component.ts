import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductCategory } from '../utilities/productCategory';


@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  Products: any = [];
  productColor: Array<{ colorName: string }> = [];
  productQty: any = [];
  productData = {};

  public modal = {};
  ngOnInit() {
    this.productService.getAllProducts().subscribe((response) => {
      this.Products = response;
    })
    this.productColor = ProductCategory.productColor;
    this.productQty = ProductCategory.productQty;
  }
  onQuickViewProduct(id) {
    this.productData = this.Products.find(item => item.productId == id);
  }
}
