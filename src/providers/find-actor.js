var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the FindActor provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var FindActor = (function () {
    function FindActor(http) {
        this.http = http;
        console.log('Hello FindActor Provider');
        this.actors = null;
        this.movies = null; //???
    }
    FindActor.prototype.getActorsPic = function (search) {
        var _this = this;
        this.actors = null; //???
        // console.log('hello', search);
        // console.log(this.actors);
        if (this.actors) {
            return Promise.resolve(this.actors);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://api.tmdb.org/3/search/person?api_key=3c0ac109cf1f3540a0a2170906ec36ff&query=' + search)
                .map(function (res) { return res.json().results; })
                .subscribe(function (data) {
                _this.actors = data;
                resolve(_this.actors);
                console.log(_this.actors);
            });
            // console.log(this.actors);
        });
    };
    FindActor.prototype.getAllMovies = function (idActor) {
        var _this = this;
        var namew = 'Al Pacino';
        this.movies = null;
        console.log('hello', idActor);
        if (this.movies) {
            return Promise.resolve(this.movies);
        }
        return new Promise(function (resolve) {
            _this.http.get('')
                .map(function (res) { return res.json().results; })
                .subscribe(function (data) {
                _this.movies = data;
                resolve(_this.movies);
                console.log('exito???' + _this.movies);
            });
            // console.log(this.actors);
        });
    };
    return FindActor;
}());
FindActor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FindActor);
export { FindActor };
//# sourceMappingURL=find-actor.js.map