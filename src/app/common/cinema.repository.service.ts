import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cinema } from './model';
import { RestDataSourceService } from './rest.datasource.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CinemaRepositoryService {
  public cinema:[]  = [];

  constructor(private _dataSource: RestDataSourceService) {

  }
  public getProduct():any{
   this._dataSource.getCinema('tt0110912').subscribe(data=> this.cinema.push(data))
   )
   return this.cinema
  }
}
