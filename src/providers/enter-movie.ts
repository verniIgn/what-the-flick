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
  cast: any;

  constructor(public http: Http) {
    console.log('Hello EnterMovie Provider');
    this.movies = null;
    this.cast = null;
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

 branchIt(idMovie: number) {
   this.cast = null;
   return new Promise (resolve => {
     this.http.get('https://api.themoviedb.org/3/movie/'+ idMovie +'/credits?api_key=3c0ac109cf1f3540a0a2170906ec36ff')
     .map(res => res.json())
     .subscribe(data => {
       this.cast = data;
       resolve(this.cast);
       console.log('please work!!', this.cast)
     });
   });

 }
// getAllMoviesByName(search: string){
//   // this.cast = null;
//    return new Promise (resolve => {
//      this.http.get('https://api.themoviedb.org/3/search/movie?api_key=3c0ac109cf1f3540a0a2170906ec36ff&query=' + search)
//      .map(res => res.json())
//      .subscribe(data => {
//        this.movies = data;
//        console.log('luck!' + data.results[0].id)

//        this.getAllMovies(data.results[0].id).then(movies => {
//             resolve(movies);

//             console.log(movies)
//        })



//      });

//    });
// }



}
