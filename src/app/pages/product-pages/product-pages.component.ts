import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsServices } from 'src/app/services/products.services';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css'],
})
export class ProductPagesComponent implements OnInit {
  title = 'Angular';
  // products: IProduct[] = [];
  // products$: Observable<IProduct[]>;
  loading = false;
  term: string;

  constructor(
    public productsServices: ProductsServices,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsServices
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productsServices.getAll().subscribe((products) => {
      this.loading = false;
    });
  }
}
