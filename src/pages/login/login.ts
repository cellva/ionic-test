import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { TabsPage } from '../tabs/tabs'
import { UserProvider } from '../../providers/providers'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public userApi: UserProvider) {
  }

  login() {
    this.userApi.login(this.user).subscribe(user => {
      if(this.userApi.authUser && this.userApi.authUser.id) {
        this.startApp();
      }
    });
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  gotoRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
