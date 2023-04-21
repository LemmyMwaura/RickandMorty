import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, retry, throwError, finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { AppData } from '../models/app-data/appdata.model';
import { RickAndMorty } from '../models/characters/rickAndMorty.model';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private URL = 'https://rickandmortyapi.com/api/character';

  constructor(private _http: HttpClient, private _spinner: NgxSpinnerService) {}

  /**
   * Returns an Observable that fetches a list of characters from the Rick and Morty API.
   * @returns {Observable<AppData>} an Observable that resolves with an AppData object containing the data - info and list of characters.
   */
  public getCharacters(): Observable<AppData> {
    this._spinner.show();

    return this._http.get<AppData>(this.URL).pipe(
      retry(3),
      catchError(this.handleError),
      finalize(() => this._spinner.hide())
    );
  }

  /**
   * Returns an Observable that fetches a unique character from the Rick and Morty API.
   * @param {string} id The ID of the character to fetch from the API.
   * @returns {Observable<RickAndMorty>} An Observable that resolves with the data for the requested character.
   */
  public getUniqueCharacter(id: string): Observable<RickAndMorty> {
    this._spinner.show();

    return this._http.get<RickAndMorty>(`${this.URL}/${id}`).pipe(
      retry(3),
      catchError(this.handleError),
      finalize(() => this._spinner.hide())
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => err);
  }
}
