import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }

  getData(): Observable<any> {
    return this.Http.get('https://api.adviceslip.com/advice')
  }

  getMode() {
    return localStorage.getItem('mode')
  }
}
