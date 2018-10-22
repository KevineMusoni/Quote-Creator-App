import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quote';
}

// tslint:disable-next-line:class-name
export class quote {
  public showSidebar: boolean;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public name: string, public authorname: string, public quote: string ) {
      this.showSidebar = false;
  }
}
