import { ErrorService } from './error.service';
import { IProduct } from './../moduls/product';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, delay, catchError, throwError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsServices {
  constructor(private http: HttpClient, public errorService: ErrorService) {}

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 10 },
        }),
      })
      .pipe(delay(1000), retry(2), catchError(this.ErrorHandler.bind(this)));
  }

  private ErrorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
