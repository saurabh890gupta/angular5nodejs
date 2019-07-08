import { Component, OnInit ,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router'
import {AuthServiceService} from '../services/auth-service.service';
 import { StripeService, Elements, Element as StripeElement, ElementOptions,
  ElementsOptions ,StripeCardComponent} from "ngx-stripe";
//  import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  total:any;
  sum:any;
  address_id:any;
  checkOut={
  firstName:'',
  lastName:'',
  city:'',
  mobile:'',
  state:'',
  postcode:''
  }
payment={
  cardNumber:'',
  name:'',
  cvv:'',
  month:'',
  year:''
}

creditCardTypes=[
  {id: 0, name: "Visa"},
  // {id: 1, name: "AmericanExpress"},
  {id: 2, name: "Maestro"},
  // {id: 3, name: "JCB"},
  // {id: 4, name: "Discover"},
  // {id: 5, name: "DinersClub"},
  {id: 6, name: "MasterCard"},
]
  //elements: Elements;
// card: StripeElement;
 
// optional parameters
//stripeTest: FormGroup;


cardOptions: ElementOptions = {
  style: {
    base: {
      iconColor: '#666EE8',
      color: '#31325F',
      fontWeight: 300,
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSize: '18px',
      '::placeholder': {
        color: '#CFD7E0'
      }
    }
  }
};

elementsOptions: ElementsOptions = {
  locale: 'es'
};

  constructor(public activateroute:ActivatedRoute,
    public router:Router,
    public authService:AuthServiceService,
   // private fb: FormBuilder,
    private stripeService: StripeService
    ) {
      
     }

  ngOnInit() {
    //  window.history.forward(); this is use for no back button work
    
      this.total=this.activateroute.queryParams.subscribe(param=>{
      console.log("addressDataId",param.addressDataId)
      this.sum=param.sum
      this.address_id=param.addressDataId
      console.log("this sum data ",this.sum,this.address_id)
      this.addressData(this.address_id);
      })
      


      // this.stripeTest = this.fb.group({
      //   name: ['', [Validators.required]]
      //   });
      //   this.stripeService.elements(this.elementsOptions)
      //   .subscribe(elements => {
      //   this.elements = elements;
      //   // Only mount the element the first time
      //   if (!this.card) {
      //   this.card = this.elements.create('card', {
      //   style: {
      //   base: {
      //   iconColor: '#666EE8',
      //   color: '#31325F',
      //   lineHeight: '40px',
      //   fontWeight: 300,
      //   fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      //   fontSize: '18px',
      //   '::placeholder': {
      //   color: '#CFD7E0'
      //   }
      //   }
      //   }
      //   });
      //   this.card.mount('#card-element');
      //   }
      //   });
     
  }
  
  addressData(address_id){
    console.log("addressData",address_id);
        this.authService.addressData(address_id).subscribe((result:any)=>{
          console.log("result data",result)
          if(result.res=="succfully data send"){
          this.checkOut=result.data
            console.log("result inside function pass",this.checkOut.firstName);
          }else{
            console.log("result not found in data");
          }
        })
  }
    buy(payment) {
      console.log("payment",payment)

      //  const name = this.stripeTest.get(payment.name).value

      //  this.stripeService.createToken(payment.card,{name}).subscribe(obj => {
      //     if (obj) {
      //     console.log("Token is",obj.token.id);
      //     this.authService.paymnetBuy(obj.token.id).subscribe((result:any)=>{
      //       console.log("result data",result)
      //       if(result.res=="succfully data send"){
      //       this.checkOut=result.data
      //         console.log("result inside function pass",this.checkOut.firstName);
      //       }else{
      //         console.log("result not found in data");
      //       }
      //     })

      //     } 
      //     else {
      //       // Error creating the token
      //     console.log("Error comes ");
      //     }
      //  });

      this.stripeService
      .createToken(this.card.getCard(), { name: 'Alan' })
      .subscribe(result => {
        if (result.token) {
          console.log("result.token",result.token);
          this.authService.paymnetBuy(result.token.id).subscribe((result:any)=>{
                  console.log("result data",result)
                  err: "err data find"
                  if(result.err=="err data find"){
                  // this.checkOut=result.data
                    console.log("result inside function pass",);
                    alert("your payment successfully done")
                    this.router.navigate(['/banner'])
                  }else{
                    console.log("result not found in data");
                  }
                })
        } else if (result.error) {
          console.log(result.error.message);
        }
      });
     }
     
    
}
