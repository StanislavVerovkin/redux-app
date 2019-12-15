import { GIT_ACTION, GitActions } from './git.action';

const initialState = {
  pull: [],
  repos: [],
};

export function gitReducer(state = initialState, action: GitActions) {
  switch (action.type) {
    case GIT_ACTION.GET_REPOS:
      return {
        ...state,
        repos: [ ...state.repos, action.payload ]
      };
    case GIT_ACTION.GET_PULLS:
      return {
        ...state,
        pull: [ ...state.pull, action.payload ]
      };
    default:
      return state;
  }
}
