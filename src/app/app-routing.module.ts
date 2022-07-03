import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { UsersComponent } from './admin/users/users.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ChatComponent } from './chat/chat.component';
import { CoachesDetailsComponent } from './Coaches/coaches-details/coaches-details.component';
import { CoachesListComponent } from './Coaches/coaches-list/coaches-list.component';
import { CoachesComponent } from './Coaches/coaches.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { CurrentTranningComponent } from './tranning/current-tranning/current-tranning.component';
import { NewTranningComponent } from './tranning/new-tranning/new-tranning.component';
import { PastTranningComponent } from './tranning/past-tranning/past-tranning.component';
import { TranningComponent } from './tranning/tranning.component';



const approutes: Routes = [
  
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'chat',component:ChatComponent,canActivate:[AuthGuard]},
  {path:'auth',component:AuthComponent},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'admin-products',component:AdminProductsComponent,canActivate:[AuthGuard]},
  {path:'admin-form',component:AdminFormComponent,canActivate:[AuthGuard]},
  {path:'coaches/details',component:CoachesDetailsComponent,canActivate:[AuthGuard]},
  {path:'coaches/list',component:CoachesListComponent,canActivate:[AuthGuard]},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'products/details',component:ProductDetailsComponent,canActivate:[AuthGuard]},
  {path:'exercises',component:ExercisesComponent,canActivate:[AuthGuard]},
  {path:'trainning',component:TranningComponent,canActivate:[AuthGuard]},
  {path:'traninning/new-tranning',component:NewTranningComponent,canActivate:[AuthGuard]},
  {path:'tranning/current-traning',component:CurrentTranningComponent,canActivate:[AuthGuard]},
  {path:'tranning/past-traning',component:PastTranningComponent,canActivate:[AuthGuard]},
  {path:'page-not-found',component:PageNotFoundComponent,canActivate:[AuthGuard]},







  
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