import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrl: './color-selector.component.scss',
})
export class ColorSelectorComponent {
  @Input() colors: string[] = [];

  constructor(private readonly colorService: ColorService) {}

  selectedColor$ = this.colorService.selectedColor$;

  selectColor(color: string) {
    //
  }
}
