import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.service';
import { ProductService  } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Product[];

  private imgUrl = 'http://placehold.it/320x150';

  private keyword:string;

  private titleFilter:FormControl = new FormControl();

  constructor(private productService:ProductService) { 
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword =value
        );
  }

  // 在组件示例化后会调用一次，以初始化数据
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

