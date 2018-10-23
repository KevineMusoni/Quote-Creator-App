import { Component } from '@angular/core';
import { Sidebar } from './sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  goals = [
    new Sidebar(1, 'It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going', 'author:', 'BrianTracy'),
    new Sidebar(2, 'Think Big...Life’s Too Short To Think Small', 'author:', 'Tim Ferriss'),
  ];
}

