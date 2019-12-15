import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';
import { switchMap, tap } from 'rxjs/operators';
import { AppState } from './redux/app.state';
import { select, Store } from '@ngrx/store';
import { GetPulls, GetRepos } from './redux/git.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  gitState: Observable<any>;

  constructor(
    private gitService: GitService,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.gitService.getPulls()
      .pipe(
        tap((res) => {
          this.store.dispatch(new GetPulls(res));
        }),
        switchMap(() => this.gitService.getRepos())
      )
      .subscribe(data => {
        this.store.dispatch(new GetRepos(data));
      });
    this.gitState = this.store.pipe(select('gitPage'));
  }
}
