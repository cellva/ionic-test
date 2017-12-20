import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CurrencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html',
})
export class CurrencyPage {
currency:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currency = this.navParams.get('currency');
    console.log(this.currency)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencyPage');
  }

}
