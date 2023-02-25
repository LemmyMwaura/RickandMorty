import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, retry, throwError } from 'rxjs';

import { AppData } from '../models/app-data/appdata.model';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private URL = 'https://rickandmortyapi.com/api/character';

  constructor(private _http: HttpClient) {}

  public getData(): Observable<AppData> {
    return this._http
      .get<AppData>(this.URL)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => err);
  }
}
