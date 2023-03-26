import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchInputService {
  private filterSub = new BehaviorSubject<string>('');
  public filter$ = this.filterSub.asObservable();

  constructor() {}

  /**
   * Sends a new filter string to the filterSub BehaviorSubject.
   * @param {string} filter - The new filter string to send.
   */
  public sendNewValue(filter: string) {
    this.filterSub.next(filter);
  }
}
