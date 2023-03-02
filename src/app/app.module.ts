import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductComponent } from './product-item/product-item.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: 'category/:categoryName', 
        component: ProductListComponent,
      },
      { path: 'category/:categoryName/:id', component: ProductDetailsComponent },
      { path: '', component: CategoryListComponent },
      { path: '**', component: CategoryListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoryListComponent,
    ProductComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
