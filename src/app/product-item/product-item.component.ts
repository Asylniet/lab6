import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() removeItem = new EventEmitter();
  liked = false;

  onLike() {
    this.liked = !this.liked;
  }
}
