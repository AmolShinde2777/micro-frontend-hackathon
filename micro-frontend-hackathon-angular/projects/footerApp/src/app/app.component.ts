import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'footerApp';
}
