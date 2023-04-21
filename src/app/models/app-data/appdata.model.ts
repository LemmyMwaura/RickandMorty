import type { RickAndMorty } from '../characters/rickAndMorty.model';
import type { Info } from './info.model';

/**
 * Represents the data fetched by the API.
 * @interface
 */
export interface AppData {
  /**
   * Information about the fetched data.
   * @type {Info}
   */
  info: Info;

  /**
   * An array of characters from the "Rick and Morty" API.
   * @type {RickAndMorty[]}
   */
  results: RickAndMorty[];
}
