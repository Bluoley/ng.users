import { gql } from 'apollo-angular';
import { User } from '../types/User';

export interface GetUsersResponse {
  getUsers: User[];
}

export const GetUsersQuery = gql`
  query GetUsers {
    getUsers {
      idUser
      nameUser
      firstLastNameUser
      secondLastNameUser
      addressUser
      phoneUser
    }
  }
`;

export interface UserResponse {
  createOrUpdateUser: User;
}

export const CreateUserMutation = gql`
  mutation CreateUser($input: CreateOrUdpateUser!) {
    createUser(input: $input) {
      nameUser
      firstLastNameUser
      secondLastNameUser
      addressUser
      phoneUser
    }
  }
`;

export const UpdateUserMutation = gql`
  mutation UpdateUser($input: CreateOrUdpateUser!) {
    updateUser(input: $input) {
      idUser
      nameUser
      firstLastNameUser
      secondLastNameUser
      addressUser
      phoneUser
    }
  }
`;

export const DeleteUserMutation = gql`
  mutation DeleteUser($idUser: Int!) {
    deleteUser(idUser: $idUser)
  }
`;

