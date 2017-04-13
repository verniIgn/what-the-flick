import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnterMovie } from '../../providers/enter-movie';
import { Content } from 'ionic-angular';


/*
  Generated class for the EnterMovie page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enter-movie',
  templateUrl: 'enter-movie.html'
})

export class EnterMoviePage {
   @ViewChild(Content) content: Content;



  // pelis: any
  show: boolean = true;
  allMovies: any;
  id: any;
  player1: any;
  player2: any;
  searchMovie: any;
  searchMovie2: any;
  correctMovie: any;
  correctPoster: any;
  name: any; //holds ONE actors name
  lastMovieId: any;
  character: any;
  correct: boolean = true;
  foundMovies: string[];
  showBranch: boolean = false;
  // showBranch2: boolean = false;
  cast: any;
  searchAnotherActor: any;
  correctActor: any; //for choosing a new actor


logForm() {

}

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
    this.cast = null;

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
    this.id = null;
    this.showBranch = false;
    // this.showBranch2 = null;
    let movieQuery = this.searchMovie;

    console.log(movieQuery);

    console.log('blabla' , this.allMovies)
    for(let i = 0; i < this.allMovies.length; i++) {

      if(movieQuery.toLowerCase() === this.allMovies[i].original_title.toLowerCase()) {
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

      }
      console.log('These are the checked movies: ', this.foundMovies);
  }

  changePlayers() {


      let temp;

      temp = this.player1;
      this.player1 = this.player2;
      this.player2 = temp;
      this.content.scrollToTop();
      this.searchMovie = null;
      this.correctMovie = null;


  }
  branch() {
    this.showBranch = true;
    this.cast = null;
    let lastTitle = this.correctMovie;
    let lastPoster = this.correctPoster;
    let lastId = this.lastMovieId;
    let actorQuery = this.searchAnotherActor;


    console.log('last movie was id:' + this.lastMovieId + ', ' + lastPoster + ', ' + lastTitle);

    this.findMoviesService.branchIt(lastId).then((cast: any) => {
      console.log('this cast', cast);
    this.cast = cast.cast;
    this.content.scrollToBottom();

    });
  }
  searchNewActor(){
    // this.cast = null;
    let newId = this.lastMovieId;
    // this.showBranch2 = null;
    this.showBranch = false;
    this.correctActor = null;
    let actorQuery = this.searchAnotherActor;
    console.log(actorQuery);
    console.log('this cast2', this.cast);

     for(let i = 0; i < this.cast.length; i++) {

      if(actorQuery === this.cast[i].name.toLowerCase()) {
        this.correctActor = this.cast[i].name;
        console.log('actor found!', this.correctActor);
        // this.showBranch2 = true;
        this.correctMovie = null;
        // this.showBranch = false;
        this.findMoviesService.getAllMovies(this.cast[i].id).then((movies: any) => {
        this.allMovies = movies.cast;
        this.searchMovie = null;
        this.name = this.searchAnotherActor;
        console.log('This is the obj I got: ', this.allMovies);


    });

      }
   }
}

}









