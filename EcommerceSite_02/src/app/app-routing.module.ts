import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CashondeliveryComponent } from './cashondelivery/cashondelivery.component';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';
import { TodaysdealsComponent } from './todaysdeals/todaysdeals.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'ViewProducts',
    component: ViewproductsComponent
  },
  {
    path: 'TodaysDeals',
    component: TodaysdealsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Giftcards',
    component: GiftcardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AboutUs',
    component: AboutusComponent
  },
  {
    path: 'ContactUs',
    component: ContactusComponent
  },
  {
    path: 'SignUp',
    component: SignupComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Login/SignUp',
    component: SignupComponent
  },
  {
    path: 'AddProduct',
    component: AddproductComponent
  },
  {
    path: 'CashonDelivery',
    component: CashondeliveryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ProductView',
    component: ProductDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
