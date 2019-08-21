import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { DomSanitizer } from '@angular/platform-browser';
var PropertyDetailComponent = /** @class */ (function () {
    function PropertyDetailComponent(route, authService, sanitizer) {
        this.route = route;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.imgData = [];
        this.multiImageData = [];
        this.ownerDetails = {
            propertyname: '',
            phone: '',
            propertycity: '',
            propertydescreption: '',
            propertyleaseperioud: '',
            propertyprice: '',
            propertystate: '',
            propertystatus: '',
            propertyarea: '',
            propertyCeilings: '',
            propertyDualsink: '',
            propertyJogpath: '',
            propertyStories: '',
            propertySwimmingpool: '',
            propertyVideo1: '',
            propertyVideo2: '',
            propertyVideo3: '',
            propertyexit: '',
            propertyimage: '',
            propertylaundryroom: '',
            propertyminbed: '',
            propertyrireplace: '',
        };
    }
    PropertyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            // this.id = +params['ind']; // (+) converts string 'id' to a number
            console.log("held dtd", params.ind);
            _this.propertyGetData(params.ind);
        });
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/YRGc21Uo8sw");
    };
    // https://www.youtube.com/embed/0bAVd9jJE2Q
    PropertyDetailComponent.prototype.propertyGetData = function (params) {
        var _this = this;
        this.authService.getPropertydata(params).subscribe(function (response) {
            // console.log("hello data found",response)
            _this.somthing = response.res;
            console.log("respons555", response.res);
            //this is for multiple image
            response.res.forEach(function (multiImage) {
                console.log("data find according array", multiImage);
                multiImage.propertyShowImage.forEach(function (insideData) {
                    _this.multiImageData.push('http://localhost:5050/' + insideData);
                });
            });
            console.log("hello get all data", _this.multiImageData);
            //this is for multiple image 
            response.res.forEach(function (data) {
                console.log("response response", data.propertyname);
                _this.ownerDetails = data;
                _this.imgData.push('http://localhost:5050/' + data.propertyimage);
            });
            // console.log("data", this.imgData);
        });
    };
    PropertyDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-property-detail',
            templateUrl: './property-detail.component.html',
            styleUrls: ['./property-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AuthServiceService,
            DomSanitizer])
    ], PropertyDetailComponent);
    return PropertyDetailComponent;
}());
export { PropertyDetailComponent };
//# sourceMappingURL=property-detail.component.js.map