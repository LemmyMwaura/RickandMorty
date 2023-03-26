import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, retry, throwError } from 'rxjs';

import { AppData } from '../models/app-data/appdata.model';
import { RickAndMorty } from '../models/characters/rickAndMorty.model';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private URL = 'https://rickandmortyapi.com/api/character';

  constructor(private _http: HttpClient) {}

  /**
   * Returns an Observable that fetches a list of characters from the Rick and Morty API.
   * @returns {Observable<AppData>} an Observable that resolves with an AppData object containing the data - info and list of characters.
   */
  public getCharacters(): Observable<AppData> {
    return this._http
      .get<AppData>(this.URL)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Returns an Observable that fetches a unique character from the Rick and Morty API.
   * @param {number} id The ID of the character to fetch from the API.
   * @returns {Observable<RickAndMorty>} An Observable that resolves with the data for the requested character.
   */
  public getUniqueCharacter(id: number): Observable<RickAndMorty> {
    return this._http
      .get<RickAndMorty>(`${this.URL}/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => err);
  }
}
