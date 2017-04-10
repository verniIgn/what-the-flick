import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FindActor } from '../../providers/find-actor';

import { EnterMoviePage } from '../enter-movie/enter-movie';

/*
  Generated class for the EnterFirstActor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enter-first-actor',
  templateUrl: 'enter-first-actor.html'
})
export class EnterFirstActorPage {
  enterMovie = EnterMoviePage;

  names: any;
  name: any; //this just holds the actor name (singular)
  allMovies: any;
  id: any; //should be a number
  actorQuery: any;
  playerOne: any;
  playerTwo: any;

logForm() {
    // console.log(this.)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public findActorService: FindActor) {
  }

  ionViewDidLoad() {
    this.playerOne = this.navParams.get('player1'); //sent playernames
    this.playerTwo = this.navParams.get('player2');


    this.names = null;
    this.actorQuery = null;
    this.id = null;
    this.allMovies = null;
  }
  //click function
  //this function finds actor, gets its obj with data, and
  storeQuery() {
    let search = this.actorQuery;

    // console.log(search);
    this.findActorService.getActorsPic(search).then((actor: any) => {
    this.names = actor;
    this.id = actor[0].id;
    this.name = actor[0].name;

    });
  }
  passId() {
    let id = this.id;
    let p1 = this.playerOne;
    let p2 = this.playerTwo;
    let name = this.name;

    this.navCtrl.push(EnterMoviePage, {
      id: this.id,
      p1: this.playerOne,
      p2: this.playerTwo,
      name: this.name
    });
  }





}


