import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { UsersComponent } from './admin/users/users.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ChatComponent } from './chat/chat.component';
import { CoachesDetailsComponent } from './Coaches/coaches-details/coaches-details.component';
import { CoachesListComponent } from './Coaches/coaches-list/coaches-list.component';
import { CoachesComponent } from './Coaches/coaches.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CurrentTranningComponent } from './tranning/current-tranning/current-tranning.component';
import { NewTranningComponent } from './tranning/new-tranning/new-tranning.component';
import { PastTranningComponent } from './tranning/past-tranning/past-tranning.component';
import { TranningComponent } from './tranning/tranning.component';



const approutes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'chat',component:ChatComponent},
  {path:'auth',component:AuthComponent},
  // {path:'coaches',component:CoachesComponent,children:[
  //     {path:'/details',component:CoachesDetailsComponent},
  //     {path:'/list',component:CoachesListComponent}
  // ]},
  // {path:'products',component:ProductsComponent,children:[
  //     {path:'/details',component:ProductDetailsComponent}
  // ]},
  // {path:'traning',component:TranningComponent,children:[
  //   {path:'/new-traning',component:NewTranningComponent},
  //   {path:'/current-traning',component:CurrentTranningComponent},
  //   {path:'/past-traning',component:PastTranningComponent}
  // ]},
  // {path:'signUp',component:SignUpComponent},
  // {path:'page-not-found',component:PageNotFoundComponent},
  // {path:'exercises',component:ExercisesComponent},
  // {path:'users',component:UsersComponent},
  // {path:'admin-products',component:AdminProductsComponent},
  // {path:'admin-form',component:AdminFormComponent},
  


];
@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }