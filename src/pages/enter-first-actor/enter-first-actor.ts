import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  name1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {

    this.name1 = this.navParams.get('player1');
  }

}
