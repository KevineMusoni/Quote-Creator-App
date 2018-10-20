import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
// (holds data returned from the api)

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.scss']
})
export class WritersComponent implements OnInit {
  writers$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getWriters().subscribe(
      data => this.writers$ = data
    );
  }

}


