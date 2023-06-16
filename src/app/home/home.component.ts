import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BasePage } from '../core/base-page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePage implements OnInit {
  sliderPosition: number = 0;
  constructor(private cdr:ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
  }
}
