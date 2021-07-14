import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  grow = 'Grow your business.' ;
  mission = 'Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.' ;
  start = 'START NOW' ;
  constructor() { }

  ngOnInit(): void {
  }

}
