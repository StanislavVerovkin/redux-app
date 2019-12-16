import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';
import { AppState } from './redux/app.state';
import { select, Store } from '@ngrx/store';
import { LoadPulls } from './redux/git.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  constructor(
    private gitService: GitService,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.store.dispatch(new LoadPulls());
    this.store.select(store => store.gitPage.pull).subscribe(x => console.log(x));
  }
}
