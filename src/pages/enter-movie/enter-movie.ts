import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnterMovie } from '../../providers/enter-movie';



/*
  Generated class for the EnterMovie page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enter-movie',
  templateUrl: 'enter-movie.html',
})

export class EnterMoviePage {
  // pelis: any
  show: boolean = true;
  allMovies: any;
  id: any;
  player1: any;
  player2: any;
  searchMovie: any;
  correctMovie: any;
  correctPoster: any;
  name: any; //holds ONE actors name
  lastMovieId: any;
  character: any;
  correct: boolean = true;
  foundMovies: string[];


logForm() {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public findMoviesService: EnterMovie) {
    this.foundMovies = [];
  }

  ionViewDidLoad() {
    this.allMovies = null;
    this.searchMovie = null;
    this.correctMovie = null;
    // this.correctPoster = null;
    this.name = null;
    this.character = null;

    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');

    this.player1 = this.navParams.get('p1');
    this.player2 = this.navParams.get('p2');
    console.log('player 1 is: ', this.player1);
    console.log('player 2 is: ', this.player2);
    let actorId = this.id;
    let test = this.name;
    console.log('The name of the actor isss: ' + test);

    console.log('This is the data after passing it ' + actorId);

    this.findMoviesService.getAllMovies(actorId).then((movies: any) => {
    this.allMovies = movies.cast;

    console.log('This is the obj I got: ', this.allMovies);

    });
  }

  findMovie() {
    this.correctMovie = null;
    this.correctPoster = null;
    this.lastMovieId = null;
    this.character = null;
    this.correct = null;
    let movieQuery = this.searchMovie;

    console.log(movieQuery);

    for(let i = 0; i < this.allMovies.length; i++) {

      if(movieQuery === this.allMovies[i].original_title.toLowerCase()) {
        console.log('console this:', this.allMovies[i].original_title)
        this.correctMovie = this.allMovies[i].original_title;
        this.correctPoster = this.allMovies[i].poster_path;
        this.lastMovieId = this.allMovies[i].id;
        this.character = this.allMovies[i].character;

        this.correct = true;
        this.foundMovies.push(this.correctMovie);
      }
    }
    if (this.correct !== true) {
        this.correct = false;
        console.log('This is wronggg!!!');
      }
      console.log('These are the checked movies: ', this.foundMovies);
  }

  cycle() {
      let temp = this.player1;
      this.player1 = this.player2;

  }


}
