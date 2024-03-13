import { Component } from '@angular/core';
import { Product } from '../product';
import { Products } from '../mock-products';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-my-item',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './my-item.component.html',
  styleUrl: './my-item.component.css'
})
export class MyItemComponent {
  myProducts = Products;
  selectedItem: Product = Products[0];
  onSelect(item: Product): void { this.selectedItem = item; }
}

