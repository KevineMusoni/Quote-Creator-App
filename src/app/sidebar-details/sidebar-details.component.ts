import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sidebar } from '../sidebar';

@Component({
  selector: 'app-sidebar-details',
  templateUrl: './sidebar-details.component.html',
  styleUrls: ['./sidebar-details.component.scss']
})
export class SidebarDetailsComponent implements OnInit {

  @Input() sidebar: Sidebar;
  @Output() isComplete = new EventEmitter<boolean>();
  isAdd: any;
  sidebarAdd(Add: boolean) {
    this.isAdd.emit(Add);
  }
  constructor() { }

  ngOnInit() {
  }

}
