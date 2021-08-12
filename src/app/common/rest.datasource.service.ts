import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cinema } from './model';

@Injectable({
  providedIn: 'root'
})
export class RestDataSourceService {
  dbUrl: string = environment.apiUrl;
  dbKey: string =environment.apiKey
  constructor(private _http: HttpClient, private _router: Router) { }
  getCinema(id:string):Observable<Cinema>{
    return this._http.get(`${this.dbUrl}${this.dbKey}&i=${id}`)
}

}

