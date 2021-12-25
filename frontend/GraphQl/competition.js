import { gql } from "@apollo/client";

export const GET_ALL_COMPETITIONS = gql`
  query competitions {
    competitions {
      _id
      title
      description
      excerpt
      startDate
      endDate
    }
  }
`;

export const GET_ONE_COMPETITION = gql`
  query competition($id: ID!) {
    competition(id: $id) {
      _id
      title
      description
      excerpt
      startDate
      endDate
    }
  }
`;

export const CREATE_COMPETITION = gql`
  mutation createCompetition(
    $title: String!
    $description: String!
    $excerpt: String!
    $startDate: Date!
    $endDate: Date!
  ) {
    createCompetition(
      competitionInput: {
        title: $title
        description: $description
        excerpt: $excerpt
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      id
      title
      description
      excerpt
      startDate
      endDate
    }
  }
`;

export const DELETE_COMPETITION = gql`
  mutation deleteCompetition($id: ID!) {
    deleteCompetition(id: $id) {
      id
      title
      description
      excerpt
      startDate
      endDate
    }
  }
`;
