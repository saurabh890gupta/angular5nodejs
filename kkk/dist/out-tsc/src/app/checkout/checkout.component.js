import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from "../services/auth-service.service";
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(activeroute, authService, router) {
        this.activeroute = activeroute;
        this.authService = authService;
        this.router = router;
        this.checkOutData = false;
        this.checkOut = {
            firstName: '',
            lastName: '',
            address: '',
            postcode: '',
            city: '',
            State: '',
            country: '',
            paymentMethod: '',
            termCondtion: '',
            mobile: ''
        };
        this.state = [
            { id: 0, name: "Andhra Pradesh" },
            { id: 1, name: "Arunachal Pradesh" },
            { id: 2, name: "Assam" },
            { id: 3, name: "Bihar" },
            { id: 4, name: "Chhattisgarh" },
            { id: 5, name: "Goa" },
            { id: 6, name: "Gujarat" },
            { id: 7, name: "Haryana" },
            { id: 8, name: "Himachal Pradesh" },
            { id: 9, name: "Jammu & Kashmir" },
            { id: 10, name: "Jharkhand" },
            { id: 11, name: "Karnataka" },
            { id: 12, name: "Kerala" },
            { id: 13, name: "Madhya Pradesh" },
            { id: 14, name: "Maharashtra" },
            { id: 15, name: "Manipur" },
            { id: 16, name: "Meghalaya" },
            { id: 17, name: "Mizoram" },
            { id: 18, name: "Nagaland" },
            { id: 19, name: "Odisha" },
            { id: 20, name: "Punjab" },
            { id: 20, name: "Rajasthan" },
            { id: 20, name: "Sikkim" },
            { id: 20, name: "Tamil Nadu" },
            { id: 20, name: "Telangana" },
            { id: 20, name: "Tripura" },
            { id: 20, name: "Uttarakhand" },
            { id: 20, name: "Uttar Pradesh" },
            { id: 20, name: "West Bengal" },
        ];
        this.country = [
            { id: 0, name: "India" },
        ];
        this.user_data = sessionStorage.getItem('user');
        console.log("user data find for property", JSON.parse(this.user_data).user_id);
        this.user_id = JSON.parse(this.user_data).user_id;
        console.log(" this.user_id find for property", this.user_id);
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.total = this.activeroute.queryParams.subscribe(function (params) {
            // this.id = +params['ind']; // (+) converts string 'id' to a number
            console.log("held sum find", params.sum);
            _this.sum = params.sum;
        });
        console.log("outer sum find", this.sum);
        // window.history.forward(); 
        // history.go(-1); this use for forword back word -1,-2,1
        // history.pushState(0,null) //this use for browser forword button not forword for next page
    };
    CheckoutComponent.prototype.submitCheckOut = function (checkOut) {
        var _this = this;
        debugger;
        if (checkOut.firstName == '' && checkOut.lastName == "" && checkOut.address == '' && checkOut.postcode == '' && checkOut.city == '' && checkOut.State == '') {
            alert("all fields are required");
            return false;
        }
        else {
            console.log("check out data find", checkOut);
            this.authService.submitCheckOut(checkOut, this.user_id).subscribe(function (data) {
                if (data) {
                    console.log("data find submitCheckOut555555", data);
                    console.log("data find submitCheckOut", data.data._id);
                    location.reload();
                    _this.router.navigate(['/Paymentpage'], { queryParams: { sum: _this.sum, addressDataId: data.data._id, } });
                }
                else {
                    console.log("data not find submitCheckOut", data);
                }
            });
        }
    };
    CheckoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AuthServiceService,
            Router])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map