import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { FetchDataService } from 'src/app/providers/fetch-data.service';
import { RickAndMorty } from 'src/app/models/characters/rickAndMorty.model';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: './rick-and-morty-list.component.html',
  styleUrls: ['./rick-and-morty-list.component.scss'],
})
export class RickAndMortyListComponent implements OnInit, OnDestroy {
  @Input() searchString!: string;
  data: RickAndMorty[] = [];
  characters$: Subscription;

  constructor(private _fetchDataService: FetchDataService) {
    this.characters$ = this._fetchDataService
      .getData()
      .subscribe((res) => (this.data = res.results));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.characters$.unsubscribe();
  }
}
