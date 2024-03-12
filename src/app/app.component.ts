import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { TABS } from './constants/constants';
import { routes } from './app.routes';
import { FirstComponent } from './components/first/first.component';
import { ComponentsModule } from './components/components.module';

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
