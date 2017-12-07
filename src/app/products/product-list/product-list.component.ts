import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Product} from '../product.interface';
import { Packet } from '_debugger';
import { ProductService } from '../../services/product.service';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService, FavoriteService],
})
export class ProductListComponent implements OnInit {


  title = 'Products';
  products: Product[];

  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  get favorites(): number {
    return this.favoriteService.getFavoritesNumber();
  }



  constructor(
    private productService: ProductService,
    private favoriteService: FavoriteService) {

    this.products = productService.getProducts();

  }

  ngOnInit() {
  }

}
