import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products';
import { categories } from '../categories';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      const categoryName = params.get('categoryName');
      
      const products = categories.find(category => category.name == categoryName)?.products!;
      this.product = products.find(product => product.id === id)!;
    })
  }
}
