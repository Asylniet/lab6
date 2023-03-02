import { Component, OnInit } from '@angular/core';
import { iPhones, airPods, Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { categories, Category } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  category?: Category;

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  removeItem(id: number) {
    this.category!.products = this.category?.products.filter((product) => product.id != id)!;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryName = params.get('categoryName');
      this.category = categories.find(category => category.name === categoryName);
    })
  }
}