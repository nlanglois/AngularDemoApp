import { Injectable } from '@angular/core';
import { Product } from '../products/product.interface';

/**
 * Used for grabbing data from his API
 */
import { HttpClient, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap, flatMap, first, catchError, shareReplay, switchMap } from "rxjs/operators";


@Injectable()
export class ProductService {


  private baseUrl: string = 'http://storerestservice.azurewebsites.net/api/products/';
  private products$: Observable<Product[]>;



  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {

    if (!this.products$) {
      /**
      * Now will grab data from his API
      * http://storerestservice.azurewebsites.net/api/products/
      */
      this.products$ = this
                        .http
                        .get<Product[]>(this.baseUrl)
                        .pipe(
                          shareReplay(), // Allows me to cache the data from the previous action
                          // for the next action (caching)
                          catchError(this.handleError)
                        );
    }
    return this.products$;
    
    }



    clearCache() {
      this.products$ = null;
    }
    



    private handleError(errorResponse: HttpErrorResponse) {
      let errorMsg: string;
      if (errorResponse.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMsg = 'An error occurred:' + errorResponse.error.message;
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
      }
      console.error(errorMsg);
      return Observable.throw(errorMsg);
    }

     



  //   return [
  //     {
  //         name: 'Trek SSL 2015',
  //         price: 999.9,
  //         description: 'Racing bike.',
  //         discontinued: false,
  //         fixedPrice: false,
  //         imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Ftrek.jpg?alt=media&token=42e1650e-7ff9-467f-bde7-0423786c94fd',
  //         modifiedDate: new Date(2016, 12, 8)
  //     },
  //     {
  //         name: 'City XT 2015',
  //         price: 659.5,
  //         description: 'City bike.',
  //         discontinued: true,
  //         fixedPrice: false,
  //         imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fcity.jpg?alt=media&token=5a79c5c3-177f-44b3-b99e-fe6be97c4f7a',
  //         modifiedDate: new Date(2017, 1, 12)
  //     },
  //     {
  //         name: 'Cosmic Cobat 2015',
  //         price: 499.9,
  //         description: 'Great bike.',
  //         discontinued: false,
  //         fixedPrice: false,
  //         imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fcosmic-cobat.jpg?alt=media&token=9df1af7a-9b79-4bf6-9b98-9079581fb7d1',
  //         modifiedDate: new Date(2017, 1, 2)
  //     },
  //     {
  //         name: 'Hero DTB 2016',
  //         price: 759,
  //         description: 'Champion\'s bike.',
  //         discontinued: false,
  //         fixedPrice: true,
  //         imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fhero-dtb.jpg?alt=media&token=8cda2f52-2b86-43eb-aa86-2537346e8736',
  //         modifiedDate: new Date(2017, 1, 24)
  //     },
  //     {
  //         name: 'S-WORKS 2016',
  //         price: 1299.9,
  //         description: 'Ultra bike.',
  //         discontinued: false,
  //         fixedPrice: false,
  //         imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fs-works.jpg?alt=media&token=5bf064a9-c8f7-4b47-a113-8825f95934f4',
  //         modifiedDate: new Date(2017, 1, 19)
  //     }
  // ];

  }
