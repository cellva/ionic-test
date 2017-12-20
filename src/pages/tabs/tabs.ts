import { Component } from '@angular/core';
import { TutorialPage } from '../tutorial/tutorial';
import { CurrencyListPage } from '../currency-list/currency-list';
import { UserProfilePage } from '../user-profile/user-profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TutorialPage;
  tab2Root = CurrencyListPage;
  tab3Root = UserProfilePage;

  constructor() {

  }
}
