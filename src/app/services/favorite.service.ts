import { Injectable } from '@angular/core';
import { Product } from '../products/product.interface';

@Injectable()
export class FavoriteService {

  constructor() { }


  /**
   * Sets (as opposed to arrays) do not allow duplicates,
   * which is why this is perfect for these favorites so we
   * don't have the ability to store multiple favorites of 
   * the same bike.
   */
  private favorites: Set<Product> = new Set();


  /**
   * Adding a product as a favorite (to a set)
   * @param product this is the product to store as a new favorite
   */
  addToFavorites(product: Product): void {
    this.favorites.add(product);
  }

  getNumberOfFavorites(): number {
    return this.favorites.size;
  }

}
