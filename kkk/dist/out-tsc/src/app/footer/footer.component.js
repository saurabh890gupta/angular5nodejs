import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
var FooterComponent = /** @class */ (function () {
    function FooterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = localStorage.getItem('loggedIn');
        console.log("hello footer", this.isLoggedIn);
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.sessionData();
    };
    FooterComponent.prototype.sessionData = function () {
        this.user_details = sessionStorage.getItem('user');
        this.user_email = JSON.parse(this.user_details);
        if (this.user_email) {
            this.userEmail = this.user_email.email;
            this.userName = this.user_email.user_name;
            console.log("fjkdhvndjk", this.user_email.email, this.userName);
        }
        //  else{
        // }
        // console.log("fjkdhvndjk",this.user_email.email)
    };
    FooterComponent.prototype.searchEmail = function (email) {
        var _this = this;
        if (email) {
            var obj = {
                email: email
            };
            console.log("obj.email", obj.email);
            this.authService.searchEmail(obj).subscribe(function (data) {
                if (data.message == "successfully found user") {
                    alert("successfully found user , you can login");
                    location.reload();
                    _this.router.navigate(['login']);
                }
                else if (data.message == "user not found") {
                    alert("user not found , first you register");
                    location.reload();
                    _this.router.navigate(['signup']);
                }
            });
        }
        else {
            alert("plz enter email");
        }
    };
    FooterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService,
            Router])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map