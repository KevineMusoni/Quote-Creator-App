import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebars = [
    new Sidebar(1, 'It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going', 'author:', 'BrianTracy'),
    new Sidebar(2, 'Think Big...Life’s Too Short To Think Small', 'author:', 'Tim Ferriss'),
  ];
  AddSidebar(isComplete, index) {
    if (isComplete) {
      this.sidebars.splice(index, 1);
    }
  }
  toogleDetails(index) {
    this.sidebars[index].showauthorName = !this.sidebars[index].showauthorName;
  }

  constructor() { }

  ngOnInit() {
  }
}
