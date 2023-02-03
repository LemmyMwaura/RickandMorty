import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from 'src/app/providers/fetch-data.service';
import { RickAndMorty } from 'src/app/models/rickAndMorty.model';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: './rick-and-morty-list.component.html',
  styleUrls: ['./rick-and-morty-list.component.scss'],
})
export class RickAndMortyListComponent implements OnInit {
  @Input() searchString!: string;
  data: RickAndMorty[] = [];

  constructor(private _fetchDataService: FetchDataService) {
    this._fetchDataService
      .getData()
      .subscribe((res) => (this.data = res.results));
  }

  ngOnInit(): void {}
}
