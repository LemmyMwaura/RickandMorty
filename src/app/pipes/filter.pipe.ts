import { Pipe, PipeTransform } from '@angular/core';
import { RickAndMorty } from '../models/characters/rickAndMorty.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /**
   * Filter an array of RickAndMorty objects based on a string filter.
   * @param {Array<RickAndMorty>} value An array of RickAndMorty objects to be filtered.
   * @param {string} filterString A string to filter the array by.
   * @returns {Array<RickAndMorty>} An array of RickAndMorty objects that match the filter string.
   */
  transform(value: RickAndMorty[], filterString: string): Array<RickAndMorty> {
    if (value.length === 0 || filterString === '') return value;

    const list = [];
    for (const item of value) {
      if (item['name'].toLowerCase().includes(filterString.toLowerCase())) {
        list.push(item);
      }
    }
    return list;
  }
}
