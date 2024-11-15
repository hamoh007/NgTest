import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {ComponentsModule} from './components/components.module';
import {TABS} from './constants/constants';
import 'zone.js';

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
export class AppComponent implements OnInit {
  title = 'NgTest';
  tabs = TABS;

  public selectedTabIndex = 0;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const location = window.location.href;
    this.selectedTabIndex = this.tabs.findIndex(tab => location.includes(tab.url));
  }

  tabChange(data: MatTabChangeEvent) {
    this.router.navigate([this.tabs[data.index].url]);
  }
}
