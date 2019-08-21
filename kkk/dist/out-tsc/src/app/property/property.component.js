import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.helImg = [];
        this.urls = [];
        this.property = {
            propertyname: '',
            propertyprice: '',
            phone: '',
            propertydescreption: '',
            propertystate: '',
            propertycity: '',
            propertystatus: '',
            propertyleaseperioud: '',
            propertyminbed: '',
            propertyarea: '',
            propertySwimmingpool: '',
            propertyStories: '',
            propertyexit: '',
            propertyrireplace: '',
            propertylaundryroom: '',
            propertyJogpath: '',
            propertyCeilings: '',
            propertyDualsink: '',
            propertyVideo1: '',
            propertyVideo2: '',
            propertyVideo3: '',
            checkBox: '',
            user_id: this.user_id,
        };
        //for tab system of property  
        this.tab = 1;
        //for tab system of property  
        //this comment also for tab system
        //   stepFirst:boolean = true;
        // stepSecond:boolean=false;
        // stepThird:boolean=false;
        // stepFour:boolean=false;
        // setTab(newTab){debugger
        //   this.tab = newTab;
        //   if(this.tab == 1){
        //     this.stepFirst=true;
        //     this.stepSecond=false;
        //     this.stepThird=false;
        //     this.stepFour=false;
        //   }else if(this.tab == 2){
        //     this.stepSecond = true;
        //     this.stepFirst = false;
        //     this.stepThird=false;
        //     this.stepFour=false;
        //   }else if(this.tab == 3){
        //     this.stepThird = true;
        //     this.stepSecond = false;
        //     this.stepFirst = false;
        //     this.stepFour=false;
        //   }else{
        //     this.stepThird = false;
        //     this.stepSecond = false;
        //     this.stepFirst = false;
        //     this.stepFour = true;
        //   }
        // }
        // isSet (tabNum){
        //     return this.tab === tabNum;
        //   };
        //this comment also for tab system
        // for Property City option 
        this.city = [
            { id: 1, name: "Noida" },
            { id: 2, name: "Ghaziabad" },
            { id: 3, name: "Greater Noida" },
            { id: 4, name: "New Delhi" },
            { id: 5, name: "Kolkata" },
        ];
        //end for Property City option 
        // for Property state option 
        this.state = [
            { id: 0, name: "Utter Pradesh" },
            { id: 1, name: "Delhi" },
        ];
        //end for Property state option 
        //for Property status option 
        this.status = [
            { id: 0, name: "Rent" },
            { id: 1, name: "Buy" }
        ];
        //end for Property status option 
        //for Property leasePeriod option 
        this.leasePeriod = [
            { id: 0, name: "1 year" },
            { id: 1, name: "2 year" },
            { id: 2, name: "3 year" }
        ];
    }
    PropertyComponent.prototype.ngOnInit = function () {
        this.user_data = sessionStorage.getItem('user');
        console.log("user data find for property", JSON.parse(this.user_data).user_id);
        this.user_id = JSON.parse(this.user_data).user_id;
        console.log(" this.user_id find for property", this.user_id);
    };
    PropertyComponent.prototype.setTab = function (newTab) {
        this.tab = newTab;
    };
    PropertyComponent.prototype.isSet = function (tabNum) {
        return this.tab === tabNum;
    };
    ;
    PropertyComponent.prototype.fileSelected = function (event) {
        var _this = this;
        // console.log(event)
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            reader_1.onload = function (e) {
                _this.imageSrc = reader_1.result;
                // console.log(" this.imageSrc", this.imageSrc)
            };
            reader_1.readAsDataURL(event.target.files[0]);
        }
    };
    PropertyComponent.prototype.propertySubmit = function (property) {
        var _this = this;
        debugger;
        if (property.propertyname == '' && property.propertyprice == '' && property.phone == '') {
            alert("plz full fill necessary proprty");
            // location.reload();
            return false;
        }
        console.log("propertyyyyyyyyyyyyyy", property, this.selectedFile);
        property.user_id = this.user_id;
        var fd = new FormData();
        fd.append('myImage', this.selectedFile);
        this.helImg.forEach(function (data) {
            console.log("dataaaaaaaaaaaaaaa", data);
            fd.append('myImage', data);
        });
        // fd.append('myImage',this.helImg);
        // fd.append("propertyname",property.propertyname);
        for (var key in property) {
            // console.log("++>",key,property[key]);
            fd.append(key, property[key]);
        }
        console.log("propertyyyyyyyyyyyyyy44444", fd);
        this.authService.propertySubmit(fd)
            .subscribe(function (response) {
            console.log("node login token data1", response);
            if (response.err == "somthing error to send") {
                alert("your property submit");
                location.reload();
                _this.router.navigate(['property']);
            }
            else {
            }
            // var obj=response.data; //dat take in obj for fetch
        });
    };
    PropertyComponent.prototype.detectFiles = function (event) {
        var _this = this;
        var files = event.target.files;
        this.helImg.push(event.target.files[0]);
        this.totalImage = this.helImg.length;
        // console.log("length",this.totalImage=this.helImg.length);
        // console.log("this.helImg",this.helImg)
        if (event.target.files && event.target.files[0]) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                // console.log("fileeeeeeeeeee",file)
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                    // console.log("hello get data urls", this.urls)
                    // console.log("hello get data urls", this.urls)
                };
                reader.readAsDataURL(file);
            }
        }
    };
    PropertyComponent.prototype.PhoneCheck = function (event) {
        var value = event.target.value;
        console.log("jejsdjjjs", value);
        var regex = "^([6-9]){10}$";
        var text = "Number should be 10 degits and Not Start From [0-5]";
        if (!(value.match(regex))) {
            document.getElementById("phonevarify").innerHTML = text;
            return false;
        }
        else {
            document.getElementById("phonevarify").innerHTML = "";
            this.property.phone = value;
            console.log("sddddddddddddddd", this.property.phone);
            return false;
        }
    };
    tslib_1.__decorate([
        ViewChild('fileInput'),
        tslib_1.__metadata("design:type", Object)
    ], PropertyComponent.prototype, "fileInput", void 0);
    tslib_1.__decorate([
        ViewChild('fileInput'),
        tslib_1.__metadata("design:type", Object)
    ], PropertyComponent.prototype, "fileInputs", void 0);
    PropertyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-property',
            templateUrl: './property.component.html',
            styleUrls: ['./property.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService,
            Router])
    ], PropertyComponent);
    return PropertyComponent;
}());
export { PropertyComponent };
//# sourceMappingURL=property.component.js.map