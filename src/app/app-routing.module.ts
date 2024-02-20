import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TechnewsComponent } from './technews/technews.component';
import { EnntnewsComponent } from './enntnews/enntnews.component';

const routes: Routes = [
  {path: "", component:HeaderComponent} ,//Home
  {path:"tech", component:TechnewsComponent},
  {path:'enter' , component:EnntnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
