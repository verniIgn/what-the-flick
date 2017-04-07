import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnterFirstActorPage } from '../enter-first-actor/enter-first-actor';

/*
  Generated class for the EnterNames page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enter-names',
  templateUrl: 'enter-names.html'
})
export class EnterNamesPage {
  enterFirstActor = EnterFirstActorPage;

  names = {};

  logForm() {
    console.log(this.names)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterNamesPage');
  }

  launchFirstActorPage() {
    let playerNames = this.names;

    this.navCtrl.push(EnterFirstActorPage, playerNames);
  }

}
