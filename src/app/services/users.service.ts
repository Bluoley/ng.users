import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { CreateOrUpdateUserInput, User } from './types/User';
import {
  UserResponse,
  GetUsersQuery,
  GetUsersResponse,
  UpdateUserMutation,
  CreateUserMutation,
  DeleteUserMutation,
} from './gql/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apollo: Apollo) {}

  getUsers(): Observable<User[]> {
    return this.apollo
      .query<GetUsersResponse>({
        query: GetUsersQuery,
        fetchPolicy: 'network-only',
      })
      .pipe(
        map((response) => {
          return response?.data?.getUsers;
        })
      );
  }

  createUser(input: CreateOrUpdateUserInput): Observable<User | undefined> {
    return this.apollo
      .mutate<UserResponse>({
        mutation: CreateUserMutation,
        variables: { input },
      })
      .pipe(
        map((response) => {
          return response?.data?.createOrUpdateUser;
        })
      );
  }

  updateUser(input: CreateOrUpdateUserInput): Observable<User | undefined> {
    return this.apollo
      .mutate<UserResponse>({
        mutation: UpdateUserMutation,
        variables: { input },
      })
      .pipe(
        map((response) => {
          return response?.data?.createOrUpdateUser;
        })
      );
  }

  deleteUser(idUser: number): Observable<boolean> {
    return this.apollo
      .mutate<any>({
        mutation: DeleteUserMutation,
        variables: { idUser },
      })
      .pipe(
        map((response) => {
          return response?.data?.deleteUser;
        })
      );
  }
}
