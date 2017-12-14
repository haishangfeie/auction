import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  imgUrl:string;
  constructor() { }

  ngOnInit() {
    this.imgUrl = "http://placehold.it/800X300";
  }

}
