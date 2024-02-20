import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrl: './technews.component.css'
})
export class TechnewsComponent  implements OnInit{

  constructor (private api : NewsApiService){}
  techData :any =[]

  ngOnInit(): void {

    this.api.techHeading().subscribe(res => { this.techData = res.articles; console.log(this.techData)});
    // get all news on page load

    
  }
}
