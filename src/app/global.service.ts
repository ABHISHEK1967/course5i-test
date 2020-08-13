import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get(environment.db_URL)
  }
}
