import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
