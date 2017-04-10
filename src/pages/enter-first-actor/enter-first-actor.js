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
import { FindActor } from '../../providers/find-actor';
import { EnterMoviePage } from '../enter-movie/enter-movie';
/*
  Generated class for the EnterFirstActor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EnterFirstActorPage = (function () {
    function EnterFirstActorPage(navCtrl, navParams, findActorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.findActorService = findActorService;
        this.enterMovie = EnterMoviePage;
    }
    EnterFirstActorPage.prototype.logForm = function () {
        // console.log(this.)
    };
    EnterFirstActorPage.prototype.ionViewDidLoad = function () {
        this.playerOne = this.navParams.get('player1');
        this.playerTwo = this.navParams.get('player2');
        //here call the service (video: 12:05)
        // this.findActorService.getActorsPic();
        this.names = null;
        this.actorQuery = null;
        this.id = null;
    };
    //click function
    //this function finds actor, gets its obj with data, and
    EnterFirstActorPage.prototype.storeQuery = function () {
        var _this = this;
        var search = this.actorQuery;
        // console.log(search);
        this.findActorService.getActorsPic(search).then(function (actor) {
            _this.names = actor;
            _this.id = actor[0].id;
        });
    };
    EnterFirstActorPage.prototype.startEnterMovies = function () {
        var _this = this;
        var actorId = this.id;
        // console.log("TEST"  + actorId);
        this.findActorService.getAllMovies(actorId).then(function (movies) {
            _this.allMovies = movies;
            console.log('estoy aca ' + movies);
        });
        //send both names + id and name and pic
        // this.navCtrl.push(EnterMoviePage);
    };
    return EnterFirstActorPage;
}());
EnterFirstActorPage = __decorate([
    Component({
        selector: 'page-enter-first-actor',
        templateUrl: 'enter-first-actor.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, FindActor])
], EnterFirstActorPage);
export { EnterFirstActorPage };
//# sourceMappingURL=enter-first-actor.js.map