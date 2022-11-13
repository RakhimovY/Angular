import { ProductsServices } from './services/products.services';
import { IProduct } from './moduls/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular';
  products: IProduct[] = [];

  constructor(private productsServices: ProductsServices) {}

  ngOnInit(): void {
    this.productsServices.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}
