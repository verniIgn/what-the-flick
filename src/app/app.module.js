var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { EnterMoviePage } from '../pages/enter-movie/enter-movie';
import { EnterMovie } from '../providers/enter-movie';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            RulesPage,
            TestactorPage,
            EnterNamesPage,
            EnterFirstActorPage,
            EnterMoviePage
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
            EnterFirstActorPage,
            EnterMoviePage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            Testactor,
            FindActor,
            EnterMovie
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map