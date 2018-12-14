import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-screen',
  templateUrl: './carousel-screen.component.html',
  styleUrls: ['./carousel-screen.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselScreenComponent implements OnInit {
  

  constructor(config: NgbCarouselConfig) {
    config.interval     = 2000;
    config.wrap         = true;
    config.keyboard     = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
