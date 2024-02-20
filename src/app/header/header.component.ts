import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  topHeading:any = [];

  constructor(private  newsAPI : NewsApiService) { }

  ngOnInit(): void {
    this.newsAPI.topHeading().subscribe((data)=>{
      // console.log(data);
      this.topHeading = data.articles
      console.log(this.topHeading)
  })
}
}
