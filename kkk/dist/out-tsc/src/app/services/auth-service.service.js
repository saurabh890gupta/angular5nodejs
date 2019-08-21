import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../config';
import { Router } from '@angular/router';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
var httpOption = {
    headers: new HttpHeaders({
        // 'enctype': 'multipart/form-data',
        'Content-Type': 'multipart/form-data',
    })
};
var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http, config, router) {
        this.http = http;
        this.config = config;
        this.router = router;
    }
    AuthServiceService.prototype.signupSubmit = function (obj) {
        var URL = this.config.url + 'signup';
        return this.http.post(URL, obj, httpOptions);
    };
    AuthServiceService.prototype.loginSubmit = function (formData) {
        console.log("--->", formData);
        var URL = this.config.url + 'login';
        console.log("dkjskf", URL);
        return this.http.post(URL, formData, httpOptions);
    };
    AuthServiceService.prototype.logout = function () {
        var URL = this.config.url + 'logOut';
        return this.http.get(URL, httpOptions);
    };
    AuthServiceService.prototype.contactSubmit = function (obj) {
        var URL = this.config.url + 'contactus';
        return this.http.post(URL, obj, httpOptions);
    };
    AuthServiceService.prototype.forgetEmail = function (obj) {
        var URL = this.config.url + 'forgetpassword';
        return this.http.post(URL, obj, httpOptions);
    };
    // propertyShow(){
    //   const URL=this.config.url+'PropertyDataSchema';
    //   return this.http.get(URL,httpOptions);
    // }
    AuthServiceService.prototype.ImageShow = function () {
        var URL = this.config.url + 'Fileget';
        return this.http.get(URL, httpOptions);
    };
    AuthServiceService.prototype.propertySubmit = function (fd) {
        console.log("lgkfjgkflgfhklg", fd);
        var URL = this.config.url + 'Upload';
        return this.http.post(URL, fd);
    };
    // propertySubmit(formData){
    // //   console.log("dfjksdljfs",fileToUpload)
    // //   const formData: FormData = new FormData();
    // // formData.append('fileKey', fileToUpload, fileToUpload.name);
    // console.log("formData",formData)
    //   const URL=this.config.url+'Upload';
    //   return this.http.post(URL,httpOption);
    // }
    AuthServiceService.prototype.changPassword = function (obj) {
        var URL = this.config.url + 'changpassword?email=' + obj.email + '';
        console.log(URL, "hell get data url");
        return this.http.post(URL, obj, httpOptions);
    };
    AuthServiceService.prototype.getPropertydata = function (ind) {
        console.log('proprty id', ind);
        var URL = this.config.url + 'propertydetailsget?_id=' + ind + '';
        console.log('URL sdfss', URL);
        return this.http.post(URL, httpOptions);
    };
    AuthServiceService.prototype.searchEmail = function (obj) {
        console.log('proprty id', obj);
        var URL = this.config.url + 'searchemail';
        console.log('URL sdfss', URL);
        return this.http.post(URL, obj, httpOptions);
    };
    AuthServiceService.prototype.submitCheckOut = function (checkOut, user_id) {
        console.log("check out data find", checkOut);
        var URL = this.config.url + 'billingAddress?user_id=' + user_id + '';
        console.log('URL sdfss', URL);
        return this.http.post(URL, checkOut, httpOptions);
    };
    AuthServiceService.prototype.addressData = function (address_id) {
        console.log("check addressData", address_id);
        var URL = this.config.url + 'getAddress?address_id=' + address_id + '';
        console.log('URL sdfss', URL);
        return this.http.post(URL, httpOptions);
    };
    AuthServiceService.prototype.paymnetBuy = function (token) {
        console.log("token data found", token);
        token = {
            id: token
        };
        console.log("token data found", token);
        var URL = this.config.url + 'payme';
        console.log('URL sdfss', URL);
        return this.http.post(URL, token, httpOptions);
    };
    AuthServiceService.prototype.adminPanel = function (admin) {
        console.log("adim data ", admin);
        var URL = this.config.url + 'admin';
        console.log('URL sdfss', URL);
        return this.http.post(URL, admin, httpOptions);
    };
    AuthServiceService.prototype.alldata = function () {
        var URL = this.config.url + 'exmple';
        console.log('URL sdfss', URL);
        return this.http.get(URL, httpOptions);
    };
    AuthServiceService.prototype.deleteUserdata = function (id, ind) {
        console.log("hello get data ", id, ind);
        var URL = this.config.url + 'deleteUserData?user_id=' + id + '';
        console.log('URL sdfss', URL);
        return this.http.post(URL, httpOptions);
    };
    AuthServiceService.prototype.updateUserData = function (userdata) {
        console.log("adim data ", userdata);
        var URL = this.config.url + 'updateUserData';
        console.log('URL sdfss', URL);
        return this.http.post(URL, userdata, httpOptions);
    };
    AuthServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            Config,
            Router])
    ], AuthServiceService);
    return AuthServiceService;
}());
export { AuthServiceService };
//# sourceMappingURL=auth-service.service.js.map