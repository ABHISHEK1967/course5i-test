import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  spinner = new BehaviorSubject(false);
  isLoading: Observable<boolean> = this.spinner.asObservable();

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get(environment.db_URL)
  }


  start() {
    this.spinner.next(true);
  }

  stop() {
    this.spinner.next(false);
  }
}
