import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user_email = {
            email: ''
        };
        this.formData = {
            email: '',
            password: '',
        };
        this.obj = {
            uname: '',
            pass: '',
            remember: ''
        };
        this.isLoggedIn = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this is use for true false value of local storage in header
        this.isLoggedIn = localStorage.getItem('loggedIn');
        //this use for back button after login not redirect home page
        if (sessionStorage.getItem('token')) {
            this.router.navigate(['banner']);
        }
    };
    // isLoggedIn=localStorage.loggedIn ;
    LoginComponent.prototype.onLogin = function (obj) {
        var _this = this;
        this.formData.email = obj.uname,
            this.formData.password = obj.pass;
        console.log("login data find", this.formData);
        this.authService.loginSubmit(this.formData)
            .subscribe(function (response) {
            console.log("node login token data1", response, response.user_data);
            if (response.message == "your account not activate") {
                alert("your account not activate plz verifie your account in gmail");
                return false;
            }
            console.log("node login token data", response.data);
            var obj = response.data; //dat take in obj for fetch
            console.log("obj", obj);
            var getdata = [];
            getdata.push(obj); //we fetch particular data from array
            console.log("getdatafind", getdata[0]); //print array data
            if (getdata[0] === "login successful") {
                if (response.token) //for store token inlocalStorage.se local storage
                 {
                    var kal = JSON.stringify(response.user_data);
                    sessionStorage.setItem('token', response.token);
                    sessionStorage.setItem('user', kal);
                }
                localStorage.setItem('loggedIn', 'true');
                _this.isLoggedIn = localStorage.getItem('loggedIn');
                _this.user_details = sessionStorage.getItem('user');
                _this.user_email = JSON.parse(_this.user_details);
                console.log("fjkdhvndjk", _this.user_email.email);
                console.log("jkhjkhjkhjk", _this.isLoggedIn);
                location.reload(); //this is necessary bcz localstorag value not isloggedin update
                alert("you are success fully login");
                _this.router.navigate(['banner']);
            }
            else {
                alert("email or password wrong");
            }
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map