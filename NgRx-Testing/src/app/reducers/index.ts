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
  // router: routerReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('State before:' + state);
    console.log('Current Action:' + action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
