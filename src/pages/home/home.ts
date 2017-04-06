import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RulesPage } from '../rules/rules';
import { TestactorPage } from '../testactor/testactor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rulesPage = RulesPage;
  testactor = TestactorPage;

  constructor(public navCtrl: NavController) {

  }

}
