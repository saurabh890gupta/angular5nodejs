import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { MapsAPILoader, MouseEvent } from '@agm/core';
var BannerComponent = /** @class */ (function () {
    // autocomplete:any;
    // private geoCoder;
    // @ViewChild('search')
    // public searchElementRef: ElementRef;
    function BannerComponent(router) {
        this.router = router;
        this.city = [
            { id: 0, name: "Noida" },
            { id: 2, name: "Ghaziabad" },
            { id: 3, name: "Greater Noida" },
            { id: 4, name: "New Delhi" },
            { id: 5, name: "Kolkata" },
        ];
        this.status = [
            { id: 0, name: "Noida" },
            { id: 2, name: "Ghaziabad" },
            { id: 3, name: "Greater Noida" },
            { id: 4, name: "New Delhi" },
            { id: 5, name: "Kolkata" },
        ];
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = localStorage.getItem('loggedIn');
        console.log(this.isLoggedIn, 'isLoggedIn');
        //this use for back button after logout not redirect banner page
        if (sessionStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
        // this.tokenVal = sessionStorage.getItem('token')
        // console.log(this.tokenVal,'token');
        // this.mapsAPILoader.load().then(() => {
        //   this.setCurrentLocation();
        //   this.geoCoder = new google.maps.Geocoder;
        //   this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //     types: ["address"]
        //   });
        //   this.autocomplete.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
        //       //verify result
        //       if (place.geometry === undefined || place.geometry === null) {
        //         return;
        //       }
        //       //set latitude, longitude and zoom
        //       this.latitude = place.geometry.location.lat();
        //       this.longitude = place.geometry.location.lng();
        //       this.zoom = 12;
        //     });
        //   });
        // });
    };
    BannerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-banner',
            templateUrl: './banner.component.html',
            styleUrls: ['./banner.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], BannerComponent);
    return BannerComponent;
}());
export { BannerComponent };
//# sourceMappingURL=banner.component.js.map