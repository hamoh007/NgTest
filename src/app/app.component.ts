import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { TABS } from './constants/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatTabsModule,
    RouterModule,
    MatTabsModule,
    ComponentsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NgTest';
  tabs = TABS;

  constructor(private router: Router) {}

  tabChange(data: MatTabChangeEvent) {
    this.router.navigate([this.tabs[data.index].url]);
  }
}
