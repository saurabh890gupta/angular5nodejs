import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  constructor(
    private authService:AuthServiceService,
    private router: Router
  ) { }
obj={
  name:'',
  email:'',
  contact:'',
  address:'',
  query:'',
}
  ngOnInit() {
  }
  IsVisible: boolean = false;

    ShowHide(){
        this.IsVisible = this.IsVisible ? false : true;
    }

    ContactUs(obj){
      console.log("obj",obj);
      if(!obj.email){
        alert("email necesary");
        return
      }
        this.authService.contactSubmit(obj).subscribe((response:any)=>{
          console.log("response of contact",response)
          if(response){
            console.log("successfully response",response)
              alert("your query successfully submit");
              // this.router.navigate(['contact']);
              this.IsVisible = false;
          }else{
            console.log("error responce",response)
            alert("somthing error");
          }
  
})
    }
}
