import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { FetchDataService } from 'src/app/providers/fetch-data.service';
import { WatchInputService } from 'src/app/providers/watch-input.service';
import { AppData } from 'src/app/models/app-data/appdata.model';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: './rick-and-morty-list.component.html',
  styleUrls: ['./rick-and-morty-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyListComponent implements OnInit {
  searchString$!: Observable<string>;
  charactersData$!: Observable<AppData>;

  constructor(
    private _fetchDataService: FetchDataService,
    private _watchInput: WatchInputService
  ) {}

  ngOnInit(): void {
    this.searchString$ = this._watchInput.filter$;
    this.charactersData$ = this._fetchDataService.getCharacters();
  }
}
