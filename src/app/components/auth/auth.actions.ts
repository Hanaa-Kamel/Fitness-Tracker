import { Action } from "@ngrx/store";


export const SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_UNAUTHENTICATED = '[Auth] Set Uuathenticated';

export class setAuthenticated implements Action{
    readonly type = SET_AUTHENTICATED;
}

export class setUuathenticated implements Action{
    readonly type = SET_UNAUTHENTICATED;
}

export type AuthActions = setAuthenticated | setUuathenticated;