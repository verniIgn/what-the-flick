import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Testactor } from '../../providers/testactor';

/*
  Generated class for the Testactor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testactor',
  templateUrl: 'testactor.html'
})
export class TestactorPage {
  movies: any;

  constructor(public navCtrl: NavController, public testactorService: Testactor, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestactorPage');
    this.testactorService.getMovies().then((data) => {
      console.log(data);
      this.movies = data;
    });
    // this.names = ['Juan', 'Ignacio', 'Verni'];
  }

}
