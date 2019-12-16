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
        repos: action.payload
      };
    case GIT_ACTION.LOAD_PULLS:
      return {
        ...state
      };
    case GIT_ACTION.GET_PULLS:
      return {
        ...state,
        pull: action.payload
      };
    default:
      return state;
  }
}
