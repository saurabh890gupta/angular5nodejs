import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { StripeService, StripeCardComponent } from "ngx-stripe";
//  import { FormGroup, FormBuilder, Validators } from "@angular/forms";
var PaymentpageComponent = /** @class */ (function () {
    function PaymentpageComponent(activateroute, router, authService, 
    // private fb: FormBuilder,
    stripeService) {
        this.activateroute = activateroute;
        this.router = router;
        this.authService = authService;
        this.stripeService = stripeService;
        this.checkOut = {
            firstName: '',
            lastName: '',
            city: '',
            mobile: '',
            state: '',
            postcode: ''
        };
        this.payment = {
            cardNumber: '',
            name: '',
            cvv: '',
            month: '',
            year: ''
        };
        this.creditCardTypes = [
            { id: 0, name: "Visa" },
            // {id: 1, name: "AmericanExpress"},
            { id: 2, name: "Maestro" },
            // {id: 3, name: "JCB"},
            // {id: 4, name: "Discover"},
            // {id: 5, name: "DinersClub"},
            { id: 6, name: "MasterCard" },
        ];
        //elements: Elements;
        // card: StripeElement;
        // optional parameters
        //stripeTest: FormGroup;
        this.cardOptions = {
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
        this.elementsOptions = {
            locale: 'es'
        };
    }
    PaymentpageComponent.prototype.ngOnInit = function () {
        //  window.history.forward(); this is use for no back button work
        var _this = this;
        this.total = this.activateroute.queryParams.subscribe(function (param) {
            console.log("addressDataId", param.addressDataId);
            _this.sum = param.sum;
            _this.address_id = param.addressDataId;
            console.log("this sum data ", _this.sum, _this.address_id);
            _this.addressData(_this.address_id);
        });
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
    };
    PaymentpageComponent.prototype.addressData = function (address_id) {
        var _this = this;
        console.log("addressData", address_id);
        this.authService.addressData(address_id).subscribe(function (result) {
            console.log("result data", result);
            if (result.res == "succfully data send") {
                _this.checkOut = result.data;
                console.log("result inside function pass", _this.checkOut.firstName);
            }
            else {
                console.log("result not found in data");
            }
        });
    };
    PaymentpageComponent.prototype.buy = function (payment) {
        var _this = this;
        console.log("payment", payment);
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
            .subscribe(function (result) {
            if (result.token) {
                console.log("result.token", result.token);
                _this.authService.paymnetBuy(result.token.id).subscribe(function (result) {
                    console.log("result data", result);
                    err: "err data find";
                    if (result.err == "err data find") {
                        // this.checkOut=result.data
                        console.log("result inside function pass");
                        alert("your payment successfully done");
                        _this.router.navigate(['/banner']);
                    }
                    else {
                        console.log("result not found in data");
                    }
                });
            }
            else if (result.error) {
                console.log(result.error.message);
            }
        });
    };
    tslib_1.__decorate([
        ViewChild(StripeCardComponent),
        tslib_1.__metadata("design:type", StripeCardComponent)
    ], PaymentpageComponent.prototype, "card", void 0);
    PaymentpageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-paymentpage',
            templateUrl: './paymentpage.component.html',
            styleUrls: ['./paymentpage.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            AuthServiceService,
            StripeService])
    ], PaymentpageComponent);
    return PaymentpageComponent;
}());
export { PaymentpageComponent };
//# sourceMappingURL=paymentpage.component.js.map