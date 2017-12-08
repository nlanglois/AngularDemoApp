import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {Product} from '../product.interface';
import { ProductService } from '../../services/product.service';
import { FavoriteService } from '../../services/favorite.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService, FavoriteService],
})
export class ProductListComponent implements OnInit, OnDestroy {


  title = 'Products';
  // products: Product[];

  products$: Observable<Product[]>;

  selectedProduct: Product;
  productSub: Subscription;


  /**
   * For pagination
   */
  pageSize: number = 5;
  start: number = 0;
  end: number = this.pageSize;


  currentPage: number = 1;




  /**
   * method to handle going to next page
   */
  nextPage(): void {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.currentPage++;
    this.selectedProduct = null;
  }

  prevPage(): void {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.currentPage--;
    this.selectedProduct = null;
  }



  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  get favorites(): number {
    return this.favoriteService.getNumberOfFavorites();
  }



  constructor(
    private productService: ProductService,
    private favoriteService: FavoriteService) {
  }


  ngOnDestroy() {
    // if (this.productSub) {
    //   this.productSub.unsubscribe();
    // }
  }


  ngOnInit() {

    this.products$ = this.productService.getProducts();

    // this.productSub = this.productService.
    // getProducts().
    // subscribe(
    //   results => this.products = results
    // );
    
  }

}
