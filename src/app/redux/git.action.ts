import { Action } from '@ngrx/store';

export namespace GIT_ACTION {
  export const GET_PULLS = 'GET_PULLS';
  export const GET_REPOS = 'GET_REPOS';
}

export class GetPulls implements Action {

  readonly type = GIT_ACTION.GET_PULLS;

  constructor(public payload: any) {
  }

}

export class GetRepos implements Action {

  readonly type = GIT_ACTION.GET_REPOS;

  constructor(public payload: any) {
  }

}


export type GitActions = GetPulls | GetRepos;
