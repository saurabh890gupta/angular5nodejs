import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
//import {HomeComponent} from './home/home.component';
import {BannerComponent} from './banner/banner.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PropertyComponent} from './property/property.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
//import {AppComponent} from './app.component';
import {ShowPropertyComponent } from "./show-property/show-property.component";
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HomeComponent} from './home/home.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
//thats call routing
import { OpenCartComponent } from './open-cart/open-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { 

    path: '', 
    component: HomeComponent,
    pathMatch:'full', 
    //  children : [{path: 'admin', component: AdminComponent ,outlet: 'admin'}]

  }, 
  { 
    path: 'admin', 
    pathMatch:'full',
    component: AdminComponent 
  },
  { 
    path: 'adminPanel', 
    pathMatch:'full',
    component: AdminPanelComponent,
  
  },
  { 
    path: 'login', 
    pathMatch:'full',
    component: LoginComponent 
  },
  { 
    path: 'signup', 
    pathMatch:'full',
    component:  SignupComponent
  },
  { 
    path: 'banner', 
    pathMatch:'full',
    component: BannerComponent 
  }, 
  { 
    path: 'about',
    pathMatch:'full',  
    component: AboutComponent 
  },
  { 
    path: 'contact',
    pathMatch:'full',  
    component:ContactComponent 
  },
  { 
    path: 'property',
    pathMatch:'full',  
    component:PropertyComponent 
  }, 
  {
    path: 'forget',
    pathMatch:'full',
    component:ForgetPasswordComponent
  },
  {
    path: 'showProperty',
    pathMatch:'full',
    component:ShowPropertyComponent
  },
  {
    path: 'changepassword',
    pathMatch:'full',
    component:ChangepasswordComponent
  },
  {
    path: 'propertydetail',
    pathMatch:'full',
    component: PropertyDetailComponent
   
  },
  {
    path: 'openCart',
    pathMatch:'full',
    component: OpenCartComponent
   
  },
  {
    path: 'checkOut',
    pathMatch:'full',
    component: CheckoutComponent
   
  },
  {
    path: 'Paymentpage',
    pathMatch:'full',
    component: PaymentpageComponent
   
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
