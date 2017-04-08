import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RulesPage } from '../pages/rules/rules';
import { TestactorPage } from '../pages/testactor/testactor';
import { Testactor } from '../providers/testactor';
import { EnterNamesPage } from '../pages/enter-names/enter-names';
import { EnterFirstActorPage } from '../pages/enter-first-actor/enter-first-actor';
import { FindActor } from '../providers/find-actor';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RulesPage,
    TestactorPage,
    EnterNamesPage,
    EnterFirstActorPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RulesPage,
    TestactorPage,
    EnterNamesPage,
    EnterFirstActorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Testactor,
    FindActor
  ]
})
export class AppModule {}

