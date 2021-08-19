
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUi from './components/shared/ui.reducer';
import * as fromAuth from './components/auth/auth.reducer';

export interface State{
    ui : fromUi.State;
    auth : fromAuth.State;
}

export const reducers : ActionReducerMap<State> = {
    ui : fromUi.uiReducer,
    auth : fromAuth.authReducer
}

export const getUiState = createFeatureSelector<fromUi.State>('ui');

export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getAuth = createSelector(getAuthState , fromAuth.getIsAuth)
