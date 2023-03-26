import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { RickAndMorty } from 'src/app/models/characters/rickAndMorty.model';
import { FetchDataService } from 'src/app/providers/fetch-data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit {
  character$!: Observable<RickAndMorty>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _fetchDataS: FetchDataService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.character$ = this._fetchDataS.getUniqueCharacter(id as number);
  }

  goBack() {
    this._router.navigate(['/home']);
  }
}
