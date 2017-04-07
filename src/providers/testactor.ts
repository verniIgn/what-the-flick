import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Testactor provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Testactor {

  data: any;

  constructor(public http: Http) {
    console.log('Hello Testactor Provider');
    this.data = null;
  }

  getMovies(){

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('http://api.tmdb.org/3/search/person?api_key=3c0ac109cf1f3540a0a2170906ec36ff&query=val+kilmer')
        .map(res => res.json().results)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }


}
