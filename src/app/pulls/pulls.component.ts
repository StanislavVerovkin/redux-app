import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulls',
  templateUrl: './pulls.component.html',
  styleUrls: [ './pulls.component.scss' ]
})
export class PullsComponent implements OnInit {

  @Input() pulls;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
