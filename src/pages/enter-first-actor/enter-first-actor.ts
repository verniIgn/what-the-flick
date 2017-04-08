import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FindActor } from '../../providers/find-actor';

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
  names: any;
  actorQuery: any;
  playerOne: any;

logForm() {
    // console.log(this.)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public findActorService: FindActor) {}

  ionViewDidLoad() {
    this.playerOne = this.navParams.get('player1');
    //here call the service (video: 12:05)
    // this.findActorService.getActorsPic();
    this.names = null;
    this.actorQuery = null;
  }
  //click function
  storeQuery() {
    let search = this.actorQuery;
    // console.log(search);
    this.findActorService.getActorsPic(search).then((actor) => {
    this.names = actor;
    });
  }
}

//getactorphoto
