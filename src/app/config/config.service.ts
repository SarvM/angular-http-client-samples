import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';


@Injectable()
export class ConfigService {

  configUrl = 'assets/config.json';
  
  //DI: instance of httpclient
  constructor(private http: HttpClient) {}

  getConfigSimple() {
    return this.http.get<Config>(this.configUrl);
  }
}