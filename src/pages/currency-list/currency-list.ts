import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { CurrencyPage } from '../currency/currency'
import { CurrencyProvider } from '../../providers/providers';
/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currency-list',
  templateUrl: 'currency-list.html',
})
export class CurrencyListPage {
  currencyList = [];
  listLimit = 15;
  loader: any;
  isLoading: boolean;
  constructor(public navCtrl: NavController, public currency: CurrencyProvider, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      spinner: 'bubbles',
    });
    this.loader.present();
    this.isLoading = true;
  }

  ionViewDidLoad() {
    this.presentLoading();
    this.fetchCurrency();
  }

  onPageScroll(slider) {
    this.fetchCurrency();
    slider.complete();    
  }
  showDetailCurrencyView(currency) {
    this.navCtrl.push(CurrencyPage, {
      currency
    });
  }

  fetchCurrency() {
    this.currency.getAll({offset: this.currencyList.length + 1 , limit: this.listLimit}, (data)=> {
      data.subscribe((res)=> {
        for(let i=0; i< res.length; i++) {
          this.currencyList.push(res[i]);
        }
        if(this.isLoading) {
          this.loader.dismiss();
          this.isLoading = false;
        }
      });
    });
  }
}
