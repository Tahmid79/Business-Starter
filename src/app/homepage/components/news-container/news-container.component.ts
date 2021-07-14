import { Component, OnInit } from '@angular/core';
import {News} from '../../data';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss']
})
export class NewsContainerComponent implements OnInit {
  about = 'ABOUT US' ;
  companyNews = 'Company news' ;
  news = News ;
  constructor() { }

  ngOnInit(): void {
  }

}
