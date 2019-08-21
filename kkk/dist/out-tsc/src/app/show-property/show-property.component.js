import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
var ShowPropertyComponent = /** @class */ (function () {
    function ShowPropertyComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.imgData = [];
        this.multiImageData = [];
        this.somthing = [];
        this.tempdata = [];
        this.IsVisible = false;
        this.array = [];
        this.count = 0;
        this.getArry = [];
        this.sum = 0;
    }
    ShowPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = localStorage.getItem('loggedIn');
        console.log("hello get syd", this.isLoggedIn);
        this.localCartData1 = sessionStorage.getItem("cart");
        this.localCartData2 = JSON.parse(this.localCartData1);
        this.array = this.localCartData2;
        // console.log("this.cal data paper", this.localCartData2 , this.array)
        if (this.localCartData2 == null) {
            this.array = [];
            this.count = 0;
        }
        else {
            this.array.forEach(function (jml) {
                _this.count = _this.count + jml.quentity;
            });
            console.log("fsdjfsdf", this.count);
        }
        // this.authService.propertyShow()
        // .subscribe((response:any) => {
        //   this.result=response
        //   console.log("propertyscrollj",this.result);
        //     });
        this.image();
    };
    ShowPropertyComponent.prototype.image = function () {
        var _this = this;
        this.authService.ImageShow()
            .subscribe(function (response) {
            // console.log("response response", response)
            _this.somthing = response.res;
            _this.tempdata = _this.somthing;
            console.log("response response", response.res);
            response.res.forEach(function (multiImage) {
                multiImage.propertyShowImage.forEach(function (inside) {
                    _this.getArry.push("http://localhost:5050/" + inside);
                });
            });
            console.log("get image overall images inside single array", _this.getArry);
            response.res.forEach(function (multiImage) {
                _this.multiImageData.push(multiImage.propertyShowImage);
            });
            console.log("get image in array inside array", _this.multiImageData);
            response.res.forEach(function (data) {
                //console.log("response response",data)
                _this.imgData.push('http://localhost:5050/' + data.propertyimage);
                // multiImageData.push()
            });
            // this.imgData.forEach((element) => {
            //   console.log("aaaa", element);
            //   //element   += 'http://localhost:4000' 
            // });
            // console.log("data", this.imgData);
        });
    };
    ShowPropertyComponent.prototype.detailsShow = function (ind) {
        if (sessionStorage.getItem('token')) {
            // console.log("hello data",ind )
            // this.router.navigate(['propertydetail'],{ queryParams: { ind: ind,data:data} }) ;
            this.router.navigate(['/propertydetail'], { queryParams: { ind: ind, } });
        }
        else {
            alert("you are not login firstly login");
            // this.showSuccess()
        }
    };
    // showSuccess() {
    //   this.toastr.success('Hello world!', 'Toastr fun!');
    // }
    ShowPropertyComponent.prototype.searchEnter = function (event) {
        var value = event.target.value;
        console.log("valueeee", value);
        this.IsVisible = false;
        if (value == undefined) {
            this.image();
            return;
        }
        if (value == '') {
            this.image();
        }
        if (value.length >= 1) {
            this.somthing = this.tempdata.filter(function (f) {
                if (f && f.propertyname.toLowerCase().indexOf(value.toLowerCase()) > -1 || f.propertycity.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    // if(f && f.propertyname.indexOf(value)>-1 || f.propertycity.indexOf(value)>-1){  //WITH OUT UPPER CASE
                    return f;
                }
            });
            if (this.somthing.length == 0) {
                this.IsVisible = true;
            }
        }
        else {
            this.somthing = [];
        }
    };
    ShowPropertyComponent.prototype.addCart = function (ind, data, city, state, status, image, price, dataId) {
        var _this = this;
        debugger;
        console.log("array data find", this.array, dataId);
        // console.log(" this.count  fsdadsffind", this.count)
        var flag = false;
        this.array.forEach(function (jk, index) {
            // console.log("jk",jk,index)
            // console.log("indexing",jk.ind,ind, )
            if (jk.ind == ind) {
                console.log("dffdf", jk.ind, ind, index);
                _this.array[index].quentity = jk.quentity + 1;
                if (_this.array[index].quentity <= 3) {
                    _this.count = _this.count + 1;
                }
                if (_this.array[index].quentity > 3) {
                    _this.count = _this.count;
                    _this.array[index].quentity = 3;
                    alert("you can not more then 3");
                }
                flag = true;
            }
        });
        if (!flag) {
            this.count = this.count + 1;
            this.quentity = 1;
            this.array.push({ ind: ind, name: data, city: city, state: state, status: status, image: image, price: price, quentity: this.quentity, data_id: dataId });
        }
        this.cartData = JSON.stringify(this.array);
        sessionStorage.setItem("cart", this.cartData);
        console.log("jkfhdhfjsdhf", this.array);
    };
    ShowPropertyComponent.prototype.openCart = function () {
        if (this.count != 0) {
            this.router.navigate(['/openCart']);
        }
        else {
            alert("firstly some add in cart");
        }
    };
    ShowPropertyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-show-property',
            templateUrl: './show-property.component.html',
            styleUrls: ['./show-property.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService,
            Router])
    ], ShowPropertyComponent);
    return ShowPropertyComponent;
}());
export { ShowPropertyComponent };
//# sourceMappingURL=show-property.component.js.map