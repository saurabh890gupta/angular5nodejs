import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.obj = {
            name: '',
            email: '',
            pass: '',
            repeatPass: '',
            remember: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function (obj) {
        var _this = this;
        console.log("hello data ", obj);
        this.obj.name = obj.name,
            this.obj.email = obj.email,
            this.obj.pass = obj.pass,
            this.obj.repeatPass = obj.repeatPass,
            this.obj.remember = obj.remember,
            console.log("signup all data find ", this.obj);
        if (this.obj.pass != this.obj.repeatPass) {
            alert("password is not match");
            return;
        }
        this.authService.signupSubmit(obj)
            .subscribe(function (response) {
            console.log("sign up response", response);
            // if(data=='success'){
            //   alert("you success fully registered")
            // }
            if (response.result == "user exist") {
                alert("you are already exsit you use your email id");
                _this.router.navigate(['login']);
                return false;
            }
            else {
                //  alert("you ");
                if (response.result == "signup successful") {
                    // if(response.token){
                    //   sessionStorage.setItem('token',response.token)
                    // }
                    //   localStorage.setItem('loggedIn','true');
                    //   this.isLoggedIn=localStorage.getItem('loggedIn');
                    //   console.log("jkhjkhjkhjk", this.isLoggedIn)
                    // location.reload();
                    // alert("you are success fully ")    
                    // this.router.navigate(['banner']);
                    alert("you are success fully signup plz check your email and active your account");
                    window.location.reload();
                    window.open('http://gmail.com');
                    // this.router.navigate(['login']);
                }
                else {
                    alert("somthing error");
                }
            }
        });
    };
    SignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService,
            Router])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map