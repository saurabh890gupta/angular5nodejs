import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(authService, router, route //this is use for get search bar url 
    ) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.obj = {
            repeatpass: '',
            pass: ''
        };
        //this is use for get search bar url 
        this.urlEmail = this.route.snapshot.queryParamMap.get('email');
        console.log(this.urlEmail, "this is email for forget password");
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    ChangepasswordComponent.prototype.changPassword = function (obj) {
        var _this = this;
        obj.email = this.urlEmail;
        console.log("objjjjjjjjjjjjjjjj", obj, obj.email);
        if (obj.repeatpass == '' && obj.pass == '') {
            alert("password field empty");
            return false;
        }
        else if (obj.repeatpass == obj.pass) {
            this.authService.changPassword(obj).subscribe(function (res) {
                console.log("resonce for forget password", res);
                if (res.message == "your password change") {
                    alert("password change succefully");
                    _this.router.navigate(['login']);
                }
                else {
                    alert("somthing error in password change");
                }
            });
        }
        else {
            alert("password is not match");
        }
    };
    ChangepasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-changepassword',
            templateUrl: './changepassword.component.html',
            styleUrls: ['./changepassword.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService,
            Router,
            ActivatedRoute //this is use for get search bar url 
        ])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());
export { ChangepasswordComponent };
//# sourceMappingURL=changepassword.component.js.map