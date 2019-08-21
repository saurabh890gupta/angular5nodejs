import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.obj = {
            email: ''
        };
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.forgrtData = function (obj) {
        console.log("forget email obj", obj);
        if (!obj.email) {
            alert("email necessary!");
            return;
        }
        else {
            this.authService.forgetEmail(obj).subscribe(function (response) {
                console.log("response data from", response);
                if (response.res) {
                    alert("check your email id for forget password link");
                    window.location.reload();
                    // window.location.href = 'https://gmail.com';  //this is use for same tab
                    window.open('http://gmail.com'); //this open new tab
                }
                else if (response.err) {
                    alert("user not exist");
                }
            });
        }
    };
    ForgetPasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService,
            Router])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());
export { ForgetPasswordComponent };
//# sourceMappingURL=forget-password.component.js.map