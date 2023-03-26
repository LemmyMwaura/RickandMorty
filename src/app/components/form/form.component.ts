import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription, tap } from 'rxjs';
import { WatchInputService } from 'src/app/providers/watch-input.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  filter = new FormControl<string>('');
  subscription!: Subscription;

  constructor(private _watchInput: WatchInputService) {}

  ngOnInit() {
    this.subscription = this.filter.valueChanges
      .pipe(tap((filter) => this._watchInput.sendNewValue(filter as string)))
      .subscribe();
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }
}
