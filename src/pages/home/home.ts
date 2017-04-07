import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RulesPage } from '../rules/rules';
import { TestactorPage } from '../testactor/testactor';
import { Testactor } from '../../providers/testactor';
import { EnterNamesPage } from '../enter-names/enter-names';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rulesPage = RulesPage;
  testactor = TestactorPage;
  enterNames = EnterNamesPage;

  constructor(public navCtrl: NavController, public testactorService: Testactor) {

  }

  ionViewDidLoad() {

  }

}
