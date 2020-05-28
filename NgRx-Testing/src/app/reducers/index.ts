import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';

export const appFeatureKey = 'app';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  // For Time Travelling debugger . Check in App.module.ts
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
