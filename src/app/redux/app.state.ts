import { PullModel } from '../models/pull.model';
import { RepoModel } from '../models/repo.model';

export interface AppState {
  gitPage: {
    pull: PullModel[];
    repos: RepoModel[];
  };
}
