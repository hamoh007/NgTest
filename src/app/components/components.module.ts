import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './first/filter.pipe';
import { MatSelectModule } from '@angular/material/select';

import { ColorSelectorComponent } from './second/color-selector/color-selector.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatSelectModule, ReactiveFormsModule],
  declarations: [
    FilterPipe,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorSelectorComponent,
    FourthComponent,
    FifthComponent,
  ],
})
export class ComponentsModule {}
