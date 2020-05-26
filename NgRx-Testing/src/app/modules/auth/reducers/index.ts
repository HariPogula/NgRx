import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { environment } from './../../../../environments/environment';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
}

// export const reducers: ActionReducerMap<State> = {};

export const initialAuthState: AuthState = { user: undefined };

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return { user: action.user };
  })
);
// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? []
//   : [];
