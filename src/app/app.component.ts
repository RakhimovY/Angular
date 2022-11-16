import { Observable } from 'rxjs';
import { ProductsServices } from './services/products.services';
import { IProduct } from './moduls/product';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular';
  // products: IProduct[] = [];
  products$: Observable<IProduct[]>;
  loading = false;
  term: string;

  constructor(private productsServices: ProductsServices) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsServices
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.productsServices.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }
}
