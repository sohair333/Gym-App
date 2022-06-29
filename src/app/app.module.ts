import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoachesListComponent } from './Coaches/coaches-list/coaches-list.component';
import { CoachesDetailsComponent } from './Coaches/coaches-details/coaches-details.component';
import { AuthComponent } from './auth/auth.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CurrentTranningComponent } from './tranning/current-tranning/current-tranning.component';
import { TranningComponent } from './tranning/tranning.component';
import { NewTranningComponent } from './tranning/new-tranning/new-tranning.component';
import { PastTranningComponent } from './tranning/past-tranning/past-tranning.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoadingSpinningComponent } from './shared/loading-spinning/loading-spinning.component';
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
import { CoachesComponent } from './Coaches/coaches.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { ProgramComponent } from './program/program.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { ProgramDetailsComponent } from './program/program-details/program-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './shared/auth.service';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyARlf11NHm8lfpJrS5_LAOq4HhlAQV6i-w",
  authDomain: "gymapp-8911a.firebaseapp.com",
  projectId: "gymapp-8911a",
  storageBucket: "gymapp-8911a.appspot.com",
  messagingSenderId: "164495475199",
  appId: "1:164495475199:web:00378485abb58cb51427ca",
  measurementId: "G-X3YFRMFJWQ"
};

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
    CoachesComponent,
    BestSellingProductsComponent,
    ProgramComponent,
    ProgramListComponent,
    ProgramDetailsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
   

  ],
  providers: [AuthService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
