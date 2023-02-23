import type { RickAndMorty } from '../characters/rickAndMorty.model';
import type { Info } from './info.model';

export interface AppData {
  info: Info;
  results: RickAndMorty[];
}
