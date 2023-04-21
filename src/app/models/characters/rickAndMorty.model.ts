import { Location } from './location.model';
import { Origin } from './origin.model';

/**
 * Represents a character from the "Rick and Morty" API.
 * @interface
 */
export interface RickAndMorty {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  createdAt: string;
}
