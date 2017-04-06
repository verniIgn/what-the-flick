import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RulesPage } from '../rules/rules';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rulesPage = RulesPage;

  constructor(public navCtrl: NavController) {

  }

}
