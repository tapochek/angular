import { Component } from '@angular/core';
import { HomeComponent } from './home/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [HomeComponent]
})
export class AppComponent {
  title = 'app works!';
}
