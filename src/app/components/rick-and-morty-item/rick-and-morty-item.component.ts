import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { RickAndMorty } from 'src/app/models/characters/rickAndMorty.model';

@Component({
  selector: 'app-rick-and-morty-item',
  templateUrl: './rick-and-morty-item.component.html',
  styleUrls: ['./rick-and-morty-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyItemComponent implements OnInit {
  @Input() character!: RickAndMorty;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToCharacter() {
    this._router.navigate(['characters', this.character.id]);
  }
}
