import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = localStorage.getItem('loggedIn');
        console.log(" this.isLoggedIn header", this.isLoggedIn);
        console.log("gdfklgdghdfklgh", sessionStorage.getItem('token'));
        //this is use for token login logout header
        //  this.token=sessionStorage.getItem('token')
        //  console.log("fjsdhfjksdfh",this.token)
        // if(this.token==null){
        //   this.token='false';
        // }
        // else{
        //   this.token='true';
        // }
    };
    HeaderComponent.prototype.onlogout = function () {
        var _this = this;
        this.authService.logout()
            .subscribe(function (response) {
            console.log("response find", response);
            if (response.data == "User logged out successfully!") {
                sessionStorage.clear();
                localStorage.setItem('loggedIn', 'false');
                _this.isLoggedIn = localStorage.getItem('loggedIn');
                console.log("value logged in", _this.isLoggedIn);
                alert("you sucessfully logout");
                location.reload(); //this is not necessary bcz localstorag value isloggedin update
                _this.router.navigate(['']);
            }
            else {
                alert("you r not logout");
            }
        });
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthServiceService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map