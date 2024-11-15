import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.scss'
})
export class FifthComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  ngOnInit() {
  }
}
