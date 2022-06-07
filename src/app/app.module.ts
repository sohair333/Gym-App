import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoachesListComponent } from './coaches-list/coaches-list.component';
import { CoachesDetailsComponent } from './coaches-details/coaches-details.component';
import { AuthComponent } from './auth/auth.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CurrentTranningComponent } from './current-tranning/current-tranning.component';
import { TranningComponent } from './tranning/tranning.component';
import { NewTranningComponent } from './new-tranning/new-tranning.component';
import { PastTranningComponent } from './past-tranning/past-tranning.component';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinningComponent } from './loading-spinning/loading-spinning.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SliderCarsoulComponent } from './slider-carsoul/slider-carsoul.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ChatComponent } from './chat/chat.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UsersComponent } from './admin/users/users.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CoachesComponent } from './coaches/coaches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExercisesComponent,
    ContactUsComponent,
    AboutUsComponent,
    CoachesListComponent,
    CoachesDetailsComponent,
    AuthComponent,
    ReviewsComponent,
    CurrentTranningComponent,
    TranningComponent,
    NewTranningComponent,
    PastTranningComponent,
    AlertComponent,
    LoadingSpinningComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminFormComponent,
    PageNotFoundComponent,
    TestimonialsComponent,
    SliderCarsoulComponent,
    BackToTopComponent,
    ChatComponent,
    ProductDetailsComponent,
    UsersComponent,
    DarkModeComponent,
    SignUpComponent,
    CoachesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
