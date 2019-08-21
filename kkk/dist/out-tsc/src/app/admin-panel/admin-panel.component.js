import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isSet = 1;
        this.optionData = true;
        this.viewoption = false;
        this.IsVisible = false;
        this.copyuserdata = {
            _id: '',
            user_name: '',
            email: '',
            account_status: '',
            address: '',
        };
        this.tempUserdata = [];
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
        this.allData();
    };
    AdminPanelComponent.prototype.user = function (gel) {
        console.log("gel", gel);
        this.isSet = gel;
        console.log(" this.isSet", this.isSet);
    };
    AdminPanelComponent.prototype.allData = function () {
        var _this = this;
        this.authService.alldata().subscribe(function (data) {
            if (data) {
                console.log("all daata find", data);
                _this.contactData = data.contactus;
                _this.userData = data.user;
                _this.tempUserdata = _this.userData;
                // this.copyuserdata=this.userData
                _this.propertyData = data.property;
                console.log("this.contactDatazzzzzzzzzzzzz", _this.copyuserdata);
                console.log("this.contactData", _this.contactData, _this.userData, _this.propertyData);
            }
            else {
                console.log("all daata not find");
            }
        });
    };
    AdminPanelComponent.prototype.edit = function (i, userid) {
        console.log("any gzb", i);
        this.rowIndex = i;
        this.roweditId = userid;
        this.optionData = false;
    };
    AdminPanelComponent.prototype.save = function (ind, userdata) {
        this.rowIndex = "46545646";
        this.optionData = true;
        console.log("ind userdata", ind, userdata);
        if (userdata) {
            this.authService.updateUserData(userdata).subscribe(function (data) {
                if (data) {
                    console.log("data find", data);
                }
                else {
                }
            });
        }
        else {
        }
    };
    AdminPanelComponent.prototype.logOut = function () {
        this.router.navigate(['/admin']);
    };
    AdminPanelComponent.prototype.view = function (ind) {
        debugger;
        console.log("helolo fsdadasd", ind);
        this.showInd = ind;
        console.log(this.showInd);
        this.copyuserdata._id = this.userData[this.showInd]._id;
        this.copyuserdata.user_name = this.userData[this.showInd].user_name;
        // this.viewoption = this.viewoption ? false : true;
        this.copyuserdata.email = this.userData[this.showInd].email;
        this.copyuserdata.account_status = this.userData[this.showInd].account_status;
        this.copyuserdata.address = this.userData[this.showInd].address;
    };
    AdminPanelComponent.prototype.deleteData = function (id, ind) {
        this.authService.deleteUserdata(id, ind).subscribe(function (res) {
            console.log("data find daTA gert ", res);
            if (res.message == "data delete successfull") {
                alert("user data delete succfully");
                location.reload();
            }
            else {
                alert("user data not delete");
            }
        });
    };
    AdminPanelComponent.prototype.searchEnter = function (event) {
        var value = event.target.value;
        console.log("valueeee", value);
        this.IsVisible = false;
        if (value == undefined) {
            this.allData();
            return;
        }
        if (value == '') {
            this.allData();
        }
        if (value.length >= 1) {
            this.userData = this.tempUserdata.filter(function (f) {
                console.log("hhhhhh", f.user_name);
                if (f && f.user_name.toLowerCase().indexOf(value.toLowerCase()) > -1 || f.email.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    // if(f && f.propertyname.indexOf(value)>-1 || f.propertycity.indexOf(value)>-1){  //WITH OUT UPPER CASE
                    console.log("ffffffffffff", f);
                    return f;
                }
            });
            if (this.userData.length == 0) {
                this.IsVisible = true;
            }
        }
        else {
            this.userData = [];
        }
    };
    AdminPanelComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-panel',
            templateUrl: './admin-panel.component.html',
            styleUrls: ['./admin-panel.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService, Router])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());
export { AdminPanelComponent };
//# sourceMappingURL=admin-panel.component.js.map