import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EnterMovie provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EnterMovie {

  movies: any;

  constructor(public http: Http) {
    console.log('Hello EnterMovie Provider');
    this.movies = null;
  }
getAllMovies(idActor: number) {
    this.movies = null;
    console.log('hello', idActor);
//asfdfdsdafdsfsdfsdfsdfsf

     return new Promise (resolve => {
     this.http.get('https://api.tmdb.org/3/person/' + idActor + '/movie_credits?api_key=3c0ac109cf1f3540a0a2170906ec36ff&language=en-US')
     .map(res => res.json())
     .subscribe(data => {
       this.movies = data;
       resolve(this.movies);
     });
   });
 }




}
