import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ChatComponent } from './chat/chat.component';
import { CoachesDetailsComponent } from './Coaches/coaches-details/coaches-details.component';
import { CoachesListComponent } from './Coaches/coaches-list/coaches-list.component';
import { CoachesComponent } from './Coaches/coaches.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CurrentTranningComponent } from './tranning/current-tranning/current-tranning.component';
import { NewTranningComponent } from './tranning/new-tranning/new-tranning.component';
import { PastTranningComponent } from './tranning/past-tranning/past-tranning.component';
import { TranningComponent } from './tranning/tranning.component';



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
  ]},
  {path:'traning',component:TranningComponent,children:[
    {path:'/new-traning',component:NewTranningComponent},
    {path:'/current-traning',component:CurrentTranningComponent},
    {path:'/past-traning',component:PastTranningComponent}
  ]},
  {path:'auth',component:AuthComponent},
  {path:'signUp',component:SignUpComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }