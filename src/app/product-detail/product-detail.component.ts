import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  newRating = 5;
  newComment= '';

  isCommentHidden = true;
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params["productId"];
    this.productService.getProduct(productId).subscribe(
      product => {this.product = product; }
    );
    this.productService.getCommentsForProductId(productId)
      .subscribe(comment => { this.comments = comment; } );

  }
  addComment() {
    const comment = new Comment(0, this.product.id, new Date().toISOString(), "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);

    const rating = this.comments.reduce(( sum , commentTmp ) => sum + commentTmp.rating, 0);
    this.product.rating = rating / this.comments.length;
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
