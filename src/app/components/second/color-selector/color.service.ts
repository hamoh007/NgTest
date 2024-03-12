import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ColorService {
  selectedColor$ = new Subject<string>();

  setColor(color: string) {
    this.selectedColor$.next(color);
  }
}
