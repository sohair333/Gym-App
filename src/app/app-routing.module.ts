import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CoachesDetailsComponent } from './Coaches/coaches-details/coaches-details.component';
import { CoachesListComponent } from './Coaches/coaches-list/coaches-list.component';
import { CoachesComponent } from './coaches/coaches.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';



const approutes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'chat',component:ChatComponent},
  {path:'coaches',component:CoachesComponent,children:[
      {path:'/details',component:CoachesDetailsComponent},
      {path:'/list',component:CoachesListComponent}
  ]},
  {path:'products',component:ProductsComponent,children:[
      {path:'/details',component:ProductDetailsComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }