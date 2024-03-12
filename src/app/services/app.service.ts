import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tab } from '../constants/constants';

@Injectable({ providedIn: 'root' })
export class AppService {
  tab = new Subject<Tab>();
  constructor() {}

  setTab(tab: Tab) {
    this.tab.next(tab);
  }
}
