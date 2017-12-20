import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
/*
  Generated class for the CurrencyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrencyProvider {
  url:any = '/api/currencies';

  constructor(public http: HttpClient, public api: ApiProvider) {
    console.log('Hello CurrencyProvider Provider');
  }
 
  getAll(params:any, cb:any) {
    // const response = this.api.get(this.url, `{"limit":${params.limit},"offset":${params.offset},"field":["logoUrl","id","name","description"]}`);
    const response = this.api.get(this.url, `{"limit":${params.limit},"offset":${params.offset}}`);
    response.subscribe(cb(response));
  }
}
