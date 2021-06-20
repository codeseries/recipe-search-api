import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"card",
    component:CardComponent
  },
  {
    path:"loading",
    component:LoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
