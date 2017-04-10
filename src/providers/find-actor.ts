import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FindActor provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FindActor {

  actors: any;
  movies: any;


  constructor(public http: Http) {
    console.log('Hello FindActor Provider');
    this.actors = null;
    this.movies = null; //???
  }

  getActorsPic(search: string) {
    this.actors = null;  //???
    // console.log('hello', search);
    // console.log(this.actors);
     if (this.actors) {
      return Promise.resolve(this.actors);
    }

    return new Promise(resolve => {
      this.http.get('http://api.tmdb.org/3/search/person?api_key=3c0ac109cf1f3540a0a2170906ec36ff&query=' + search)
        .map(res => res.json().results)
        .subscribe(data => {
          this.actors = data;
          resolve(this.actors);
          console.log(this.actors);
        });
        // console.log(this.actors);
      });
  }
}

