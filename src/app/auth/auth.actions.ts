import { Action } from '@ngrx/store';
import { UserModel } from './user.model';
export const SET_USER = '[Auth] Set User';

export class SetUserAction implements Action {
    readonly type = SET_USER;

    constructor(public user: UserModel) { }
}

export type acciones = SetUserAction;
