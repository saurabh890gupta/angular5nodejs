import { NgModule } from '@angular/core';
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
const routes: Routes = [
  { 
    path: '', 
    pathMatch:'full',
    component: HomeComponent 
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
