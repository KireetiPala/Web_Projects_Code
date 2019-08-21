import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CashondeliveryComponent } from './cashondelivery/cashondelivery.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { TodaysdealsComponent } from './todaysdeals/todaysdeals.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    CashondeliveryComponent,
    NavbarComponent,
    ProductsComponent,
    TodaysdealsComponent,
    GiftcardsComponent,
    AddproductComponent,
    ViewproductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
