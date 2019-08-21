import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
var ContactComponent = /** @class */ (function () {
    function ContactComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.obj = {
            name: '',
            email: '',
            contact: '',
            address: '',
            query: '',
            user_id: '',
        };
        this.IsVisible = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = localStorage.getItem('loggedIn');
        console.log(" this.isLoggedIn header", this.isLoggedIn);
        this.user_data = sessionStorage.getItem('user');
        console.log("user data find for property", JSON.parse(this.user_data).user_id);
        this.user_id = JSON.parse(this.user_data).user_id;
        console.log(" this.user_id find for property", this.user_id);
    };
    ContactComponent.prototype.ShowHide = function () {
        this.IsVisible = this.IsVisible ? false : true;
    };
    ContactComponent.prototype.ContactUs = function (obj) {
        var _this = this;
        obj.user_id = this.user_id;
        console.log("obj", obj);
        if (!obj.email) {
            alert("email necesary");
            return;
        }
        this.authService.contactSubmit(obj).subscribe(function (response) {
            console.log("response of contact", response);
            if (response) {
                console.log("successfully response", response);
                alert("your query successfully submit");
                // this.router.navigate(['contact']);
                _this.IsVisible = false;
            }
            else {
                console.log("error responce", response);
                alert("somthing error");
            }
        });
    };
    ContactComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService,
            Router])
    ], ContactComponent);
    return ContactComponent;
}());
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map