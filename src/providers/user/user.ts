import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class UserProvider {
  authUser: any;

  constructor(public api: ApiProvider) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('api/users/login', accountInfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res) {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('api/users/login', accountInfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res) {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  getUserByAccessToken(accessToken:any) {
    return this.api.get(`api/AccessTokens/${accessToken}/user`, accessToken);
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this.authUser = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this.authUser = resp;
  }
}
