import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { Router ,ActivatedRoute} from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
        this.isset = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("hello");
        console.log("heloo", window.location.href);
        if (window.location.href == "http://localhost:4200/admin" || window.location.href == "http://localhost:4200/adminPanel") {
            this.isset = true;
        }
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map