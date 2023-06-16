import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BasePage } from '../core/base-page';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent extends BasePage implements OnInit {
  colors = ['#000014', '#F70000', '#0320FF', '#F2E416'];
  changeColor = '#000026';
  constructor(private cdr: ChangeDetectorRef) {
    super();
    console.log('vanakam');
    console.log('test', this.current.theme);

    this.startColorChange();
  }

  ngOnInit(): void {
  }
  startColorChange() {
    let currentIndex = 0;

    setInterval(() => {
      this.changeColor = this.colors[currentIndex];
      this.cdr.markForCheck();

      currentIndex = (currentIndex + 1) % this.colors.length;
    }, 1000);
  }
  visitSite() {
    window.open('http://www.adaptivemedia.tech', '_blank');
  }
}
