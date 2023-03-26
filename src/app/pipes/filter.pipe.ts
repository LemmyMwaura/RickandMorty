import { Pipe, PipeTransform } from '@angular/core';

import { Observable, combineLatest, map, of, switchMap } from 'rxjs';

import { AppData } from '../models/app-data/appdata.model';
import { RickAndMorty } from '../models/characters/rickAndMorty.model';

@Pipe({
  name: 'filter',
})
/**
 * A pipe that filters an array of Rick and Morty characters based on a provided filter string.
 * @implements {PipeTransform}
 */
export class FilterPipe implements PipeTransform {
  /**
   * Transforms an observable of AppData and an observable of string into an observable of filtered Rick and Morty characters.
   * @param {Observable<AppData>} characters$ An observable of characters.
   * @param {Observable<string>} filterString$ An observable of filter string.
   * @returns {Observable<RickAndMorty[]>} An observable of filtered Rick and Morty characters.
   */
  transform(characters$: Observable<AppData>, filterString$: Observable<string>): Observable<RickAndMorty[]> {
    return combineLatest([filterString$, characters$]).pipe(
      map(([filter, AppData]) => {
        const { results: characters } = AppData;

        if (characters.length === 0 || filter === '') {
          return characters
        }

        return characters.filter((char) => {
          char.name.toLowerCase().includes(filter.toLowerCase());
        });
      }),
      switchMap((characters) => of(characters))
    );
  }
}
