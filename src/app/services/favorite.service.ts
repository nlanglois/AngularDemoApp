import { Injectable } from '@angular/core';
import { Product } from '../products/product.interface';

@Injectable()
export class FavoriteService {

  constructor() { }


  private favorites: Product[] = [];


  addToFavorites(product: Product): void {
    this.favorites.push(product);
  }

  getFavoritesNumber(): number {
    return this.favorites.length;
  }

}
