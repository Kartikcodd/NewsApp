import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http : HttpClient) { }

  //NewApi

  newapi = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d3c9c181a6d74a5d872e2e4d68a4edf6`;

  techApi= `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d3c9c181a6d74a5d872e2e4d68a4edf6
  `;

  enterNews = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d3c9c181a6d74a5d872e2e4d68a4edf6`
  topHeading(): Observable<any>{
    return  this.http.get(this.newapi);
  }


techHeading():Observable<any>{
  return this.http.get(this.techApi);
}
enterH():Observable<any>{
  return this.http.get(this.enterNews);
}
}
