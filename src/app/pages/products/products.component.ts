import { Component } from '@angular/core';
import { ProductPageHeaderComponent } from './components/product-page-header/product-page-header.component';
import { ProductPageTableComponent } from './components/product-page-table/product-page-table.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductPageHeaderComponent, ProductPageTableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {

}
