import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { FavoriteService } from '../services/favorite.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports: [
    ProductListComponent,
  ],
  declarations: [
    ProductListComponent, 
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    FavoriteService,
  ]
})
export class ProductsModule { }
