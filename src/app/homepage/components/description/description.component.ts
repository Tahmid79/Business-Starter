import { Component, OnInit, Input } from '@angular/core';

interface Description {
  header: string ;
  title: string ;
  paragraph: string ;
}

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() info: Description ;
  header: string ;
  title: string ;
  paragraph: string ;
  learnMore = 'LEARN MORE' ;

  constructor() { }

  ngOnInit(): void {
    this.init() ;
  }
  init(): void{
    const {header, title, paragraph} = this.info ;
    this.header = header ;
    this.title = title ;
    this.paragraph = paragraph ;
  }
}
