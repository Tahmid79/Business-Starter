import { Component, OnInit, Input } from '@angular/core';
import {loremIpsum} from '../../data';

interface NewsInfo {
  title: string  ;
  date: string ;
  text: string ;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() newsInfo: NewsInfo ;
  title = '10 Quick Tips About Blogging' ;
  date = 'FEB 21, 2019' ;
  text = loremIpsum ;
  constructor() { }

  ngOnInit(): void {
    const {title, date, text} = this.newsInfo ;
    this.title = title ;
    this.date = date ;
    this.text = text ;
  }

}
