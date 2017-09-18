import md5 from 'crypto-js/md5';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ComicService {
   urlBase = 'http://gateway.marvel.com/v1/public/';
   privateapi = '003c81343b52f0cf0722b0ea73ba1ee0f428ff19';
   publickey= '5b23f1dbea4c2160ed035a817fd4fc38';


  options = new RequestOptions({
    headers: new Headers({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
      'Access-Control-Allow-Methods': 'GET, PUT, POST'
    })
  });


  constructor(private http: Http) {
    this.http = http;
  }
  getUsers(): Observable<Response> {
    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth();
    const anno = date.getFullYear();
    const hora = date.getHours();
    const min = date.getMinutes();
    const seg = date.getSeconds();
    const ts = '' + anno + mes + dia + hora + min + seg;

    const key = ts + this.privateapi + this.publickey;
    const hash =  md5(key);
    const comics =  this.urlBase + 'comics?ts=' + ts + '&apikey=' + this.publickey  + '&hash=' + hash;
     return this.http.get(comics);
  }


}
