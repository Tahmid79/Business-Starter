import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  believe = 'WHAT WE BELIEVE IN' ;
  grow = 'Grow your business, establish your brand, and put your customers first.' ;
  constructor() { }

  ngOnInit(): void {
  }

}
