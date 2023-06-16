import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { BasePage } from './core/base-page';
import * as moment from 'moment-timezone';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
  export class AppComponent extends BasePage {
    title = 'Professional';
    timezone = 'Asia/Calcutta';
    date = new Date();
    constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) {
      super();
      this.current.theme = 'dark';
      this.themeToggle();
    }
    themeToggle() {
      if (this.current.theme === 'light') {
        document.body.style.backgroundColor = 'white';
        this.current.theme = 'dark';
      } else {
        document.body.style.backgroundColor = '#212529';
        this.current.theme = 'light';
      };
      this.cdr.markForCheck();
    }
  }
