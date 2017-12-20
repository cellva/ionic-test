import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LoginPage } from '../pages/login/login';
import { CurrencyPage } from '../pages/currency/currency';
import { TabsPage } from '../pages/tabs/tabs';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { CurrencyListPage } from '../pages/currency-list/currency-list';

import { ApiProvider } from '../providers/api/api';
import { CurrencyProvider } from '../providers/currency/currency';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    TutorialPage,
    LoginPage,
    CurrencyPage,
    TabsPage,
    UserProfilePage,
    CurrencyListPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialPage,
    LoginPage,
    CurrencyPage,
    TabsPage,
    UserProfilePage,
    CurrencyListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    CurrencyProvider,
    UserProvider
  ]
})
export class AppModule {}
