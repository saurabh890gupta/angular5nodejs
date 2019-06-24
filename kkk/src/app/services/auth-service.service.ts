import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../config';
import { Router } from '@angular/router';
import { config } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
const httpOption = {
  headers: new HttpHeaders({
    // 'enctype': 'multipart/form-data',

    'Content-Type': 'multipart/form-data',
    // 'Accept': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private http: HttpClient,
    private config:Config,
    private router: Router
    ){
     
     }
    
    signupSubmit(obj){
        const URL = this.config.url + 'signup';
        return this.http.post(URL, obj, httpOptions);
    }

    loginSubmit(formData){
      console.log("--->",formData)
      const URL = this.config.url + 'login';
      console.log("dkjskf",URL)
      return this.http.post(URL, formData,httpOptions);
    }
    logout(){
      const URL = this.config.url + 'logOut';
      return this.http.get(URL, httpOptions);
    }
    contactSubmit(obj){
      const URL=this.config.url + 'contactus';
      return this.http.post(URL,obj,httpOptions);
    }
    forgetEmail(obj){
      const URL=this.config.url+'forgetpassword';
      return this.http.post(URL,obj,httpOptions);
    }
    // propertyShow(){
    //   const URL=this.config.url+'PropertyDataSchema';
    //   return this.http.get(URL,httpOptions);
    // }
    ImageShow(){
      const URL=this.config.url+'Fileget';
      return this.http.get(URL,httpOptions);
    }
    propertySubmit(fd){
      
      console.log("lgkfjgkflgfhklg",fd)
      const URL=this.config.url+'Upload';
      return this.http.post(URL,fd);
    }
    // propertySubmit(formData){
    // //   console.log("dfjksdljfs",fileToUpload)
    // //   const formData: FormData = new FormData();
    // // formData.append('fileKey', fileToUpload, fileToUpload.name);
    // console.log("formData",formData)
    //   const URL=this.config.url+'Upload';
    //   return this.http.post(URL,httpOption);
    // }
    changPassword(obj){
      const URL=this.config.url+'changpassword?email='+obj.email+'';
      console.log(URL,"hell get data url");
      
      return this.http.post(URL,obj,httpOptions); 
    }
    getPropertydata(ind){
      console.log('proprty id',ind)
      const URL=this.config.url+'propertydetailsget?_id='+ind+'';
      console.log('URL sdfss',URL)
      return this.http.post(URL,httpOptions);
    }
    searchEmail(obj){
      console.log('proprty id',obj)
      const URL=this.config.url+'searchemail';
      console.log('URL sdfss',URL)
      return this.http.post(URL,obj,httpOptions)
    }

}
