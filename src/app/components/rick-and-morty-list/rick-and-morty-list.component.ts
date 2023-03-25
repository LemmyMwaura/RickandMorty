import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Observable } from 'rxjs';

import { FetchDataService } from 'src/app/providers/fetch-data.service';
import { AppData } from 'src/app/models/app-data/appdata.model';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: './rick-and-morty-list.component.html',
  styleUrls: ['./rick-and-morty-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyListComponent implements OnInit {
  @Input() searchString!: string;
  characters$: Observable<AppData>;

  constructor(private _fetchDataService: FetchDataService) {
    this.characters$ = this._fetchDataService.getCharacters();
  }

  ngOnInit(): void {}
}
