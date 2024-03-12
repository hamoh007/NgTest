import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent implements OnInit {
  users$ = this.dataService.users$;

  searchText: string = '';

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe();
  }
}
