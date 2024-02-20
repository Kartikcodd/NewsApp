import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-enntnews',
  templateUrl: './enntnews.component.html',
  styleUrl: './enntnews.component.css'
})
export class EnntnewsComponent implements OnInit {

  
 
  constructor(private api : NewsApiService){}
  data :any =[]
  ngOnInit(): void {
    this.api.enterH().subscribe((res)=>{
   this.data = res.articles
     
  })    
  }
}
