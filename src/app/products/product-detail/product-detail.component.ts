import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.interface';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [],
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(private favoriteService: FavoriteService) { }

  newFavorite(product: Product): void {
    this.favoriteService.addToFavorites(product);
  }


  ngOnInit() {
  }

}
