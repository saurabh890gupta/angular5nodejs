import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.city = [
            { id: 0, name: "Noida" },
            { id: 2, name: "Ghaziabad" },
            { id: 3, name: "Greater Noida" },
            { id: 4, name: "New Delhi" },
            { id: 5, name: "Kolkata" },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        localStorage.setItem('loggedIn', 'false');
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map