import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsServices } from 'src/app/services/products.services';

@Component({
  selector: 'app-creat-product',
  templateUrl: './creat-product.component.html',
  styleUrls: ['./creat-product.component.css'],
})
export class CreatProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    public modalService: ModalService,
    private productsServices: ProductsServices
  ) {}

  ngOnInit(): void {}

  submit() {
    this.productsServices
      .creat({
        title: this.form.value.title as string,
        price: 13.5,
        description: 'lorem',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: "43",
          count: "1"
        }
      })
      .subscribe(() => {
        this.modalService.close();
      });
    console.log(this.form.value);
  }

  get title() {
    return this.form.controls.title as FormControl;
  }
}
