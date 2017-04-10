var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Testactor } from '../../providers/testactor';
/*
  Generated class for the Testactor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TestactorPage = (function () {
    function TestactorPage(navCtrl, testactorService, navParams) {
        this.navCtrl = navCtrl;
        this.testactorService = testactorService;
        this.navParams = navParams;
    }
    TestactorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TestactorPage');
        this.testactorService.getMovies().then(function (data) {
            console.log(data);
            _this.movies = data;
        });
        // this.names = ['Juan', 'Ignacio', 'Verni'];
    };
    return TestactorPage;
}());
TestactorPage = __decorate([
    Component({
        selector: 'page-testactor',
        templateUrl: 'testactor.html'
    }),
    __metadata("design:paramtypes", [NavController, Testactor, NavParams])
], TestactorPage);
export { TestactorPage };
//# sourceMappingURL=testactor.js.map