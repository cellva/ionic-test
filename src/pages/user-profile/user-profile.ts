import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/providers'
import { LoginPage } from '../login/login';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  user: any;
  message: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userApi: UserProvider) {
  }

  ionViewDidLoad() {
    if(this.userApi.authUser && this.userApi.authUser.id) {
      // const response = this.userApi.getUserByAccessToken(this.userApi.authUser.id);
      // response.subscribe(data => {
      //   this.user = data;
      //   console.log('ionViewDidLoad UserProfilePage', this.user);
      // });
      this.message = "Profile page loaded";
      console.log("profile page loaded")
    } else {
      // alert();
      this.message = "Login to update profile";
      console.log("Login to update profile")
    }
  }

}
