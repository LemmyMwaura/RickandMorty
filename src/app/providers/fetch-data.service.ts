import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppData } from '../models/app-data/appdata.model';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  URL = 'https://rickandmortyapi.com/api/character'
  constructor(private _http:HttpClient) { }

  getData(): Observable<AppData> {
    return this._http.get<AppData>(this.URL)
  }
}
