import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { Injectable, EventEmitter } from '@angular/core';
import { Api } from '../api/api';
import { NullTemplateVisitor } from '@angular/compiler';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class User {
  _user: any;
  token;

  public static userChanged: EventEmitter<Boolean> = new EventEmitter()

  constructor(
    public api: Api,
    public storage: Storage,
    public http: HttpClient,
    public loadingCtrl: LoadingController
  ) { }

  checkAuthentication(token) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', token);
      this.http.get(this.api.url + '/api/auth/protected', { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  login(accountInfo: any): Observable<any> {
    let seq = this.api.post('api/auth/login', accountInfo).share();
    seq.subscribe((res: any) => {
      this._loggedIn(res);

    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  signup(accountInfo: any) {
    let seq = this.api.post('api/auth/register', accountInfo).share();

    seq.subscribe((res: any) => {
      if (res.status == 'success') {
        //   this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  users_list() {
    let seq = this.api.get('api/auth/usersList').share();
    seq.subscribe((res: any) => {
      return res;
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  update_user(accountInfo) {
    let loading = this.loadingCtrl.create({
      content: "Processing ..."
    });
    loading.present();
    delete accountInfo.__v;
    let seq = this.api.post('api/auth/update', accountInfo).share();
    seq.subscribe((res: any) => {
      loading.dismiss();
    }, err => {
      loading.dismiss();
      console.error('ERROR', err);
    });

    return seq;
  }

  logout() {
    this._user = null;
    this.storage.set('token', '');
    this.storage.set('user', {});
  }

  _loggedIn(resp) {
    this.storage.set('token', resp.token);
    this.storage.set('user', resp.user).then((res) => { });
    User.userChanged.next(resp.user);
  }
}
