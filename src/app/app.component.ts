import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoronaVirusTracker';

  // constructor(@Inject(APP_BASE_HREF) private baseHref:string) { 
  //   console.log(this.baseHref);
  // }
}
