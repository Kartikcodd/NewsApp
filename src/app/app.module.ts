import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { NewsApiService } from './service/news-api.service';
import { TechnewsComponent } from './technews/technews.component';
import { EnntnewsComponent } from './enntnews/enntnews.component'; 
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechnewsComponent,
    EnntnewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
