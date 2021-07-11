import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  tiles = '/assets/images/home/tiles.svg' ;
  businessBoost = 'Give your business a boost with a beautifully crafted homepage.' ;
  learnMore = 'LEARN MORE' ;
  constructor() { }

  ngOnInit(): void {
  }

}
