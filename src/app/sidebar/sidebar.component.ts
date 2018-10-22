import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  quote: any;
  // log(x) { console.log(x); }

  toogleDetails(index) {
    this.quote[index].showSidebar = !this.quote[index].showSidebar;
}
  constructor() { }

  ngOnInit() {
  }

}
