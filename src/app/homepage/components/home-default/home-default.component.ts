import { Component, OnInit } from '@angular/core';
import {description} from '../../data' ;

@Component({
  selector: 'app-home-default',
  templateUrl: './home-default.component.html',
  styleUrls: ['./home-default.component.scss']
})
export class HomeDefaultComponent implements OnInit {
  description = description ;
  constructor() { }

  ngOnInit(): void {
  }

}
