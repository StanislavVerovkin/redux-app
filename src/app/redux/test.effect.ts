import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GetPulls, GIT_ACTION, LoadPulls } from './git.action';
import { GitService } from '../git.service';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class TestEffect {

  constructor(
    private actions: Actions,
    private service: GitService,
  ) {
  }

  @Effect() getPulls = this.actions.pipe(
    ofType<LoadPulls>(GIT_ACTION.LOAD_PULLS),
    switchMap(() => this.service.getPulls()
      .pipe(
        map((data) => new GetPulls(data))
      )
    ),
  );
}
