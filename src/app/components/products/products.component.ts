import { Component } from '@angular/core';
import { ProductsMiniComponent } from '../products-mini/products-mini.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsMiniComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
