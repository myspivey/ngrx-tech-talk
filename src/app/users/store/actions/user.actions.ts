import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum UserActionTypes {
  CreateUser = '[User] CreateUser',
  UpdateUser = '[User] UpdateUser',
  DeleteUser = '[User] DeleteUser',
}

export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;

  constructor(public payload: User) {
  }
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;

  constructor(public payload: any) {
  }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser;

  constructor(public payload: any) {
  }
}

export type UserActions =
  CreateUser
  | UpdateUser
  | DeleteUser;
