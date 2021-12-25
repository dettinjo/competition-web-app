import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      userId
      token
      userRole
    }
  }
`;

export const USER_INFO = gql`
  query UserInfo {
    me {
      name
      email
      userRole
    }
  }
`;

export const GET_WINNER = gql`
  query Winner {
    winner {
      name
      email
      biography
    }
  }
`;

export const GET_ONE_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      name
      email
      userRole
      submissions {
        _id
        submissionBody
        submissionDate
        competition {
          title
          startDate
          endDate
        }
      }
      biography
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $userRole: String!
    $biography: String
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      userRole: $userRole
      biography: $biography
    ) {
      name
      email
      biography
      userRole
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
      name
      biography
      email
      userRole
    }
  }
`;

export const EDIT_USER = gql`
  mutation EditUser($id: ID!, $winner: Boolean!) {
    editUser(id: $id, winner: $winner) {
      name
      email
      biography
      userRole
      winner
    }
  }
`;
