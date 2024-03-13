import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  users$ = this.dataService.users$;

  searchText: string = '';

  constructor(private readonly dataService: DataService) {
    // Fetch users from DataService
  }
}
