import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.admin = {
            email: '',
            password: ''
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.submit = function (admin) {
        var _this = this;
        console.log("hello admin data", admin);
        if (admin.email && admin.password) {
            this.authService.adminPanel(admin).subscribe(function (result) {
                if (result) {
                    console.log("hello else part", result);
                    location.reload();
                    _this.router.navigate(['/adminPanel']);
                }
                else {
                }
            });
        }
        else {
            console.log("hello else part");
            alert("both fields are required");
        }
    };
    AdminComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService, Router])
    ], AdminComponent);
    return AdminComponent;
}());
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map