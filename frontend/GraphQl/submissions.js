import { gql } from "@apollo/client";

export const GET_ALL_SUBMISSIONS = gql`
  query {
    submissions {
      _id
      submissionBody
      submissionDate
      rating
      user {
        _id
        name
      }
      competition {
        _id
        title
        description
        startDate
        endDate
      }
    }
  }
`;

export const GET_ONE_SUBMISSION = gql`
  query submission($id: ID!) {
    submission(id: $id) {
      _id
      submissionBody
      submissionDate
      rating
      user {
        _id
        name
      }
      competition {
        _id
        title
        description
        startDate
        endDate
      }
    }
  }
`;


export const CREATE_SUBMISSION = gql`
  mutation CreateSubmission(
    $submissionBody: String!
    $submissionDate: String!
    $rating: Float
    $competition: ID!
  ) {
    createSubmission(
      submissionBody: $submissionBody
      submissionDate: $submissionDate
      rating: $rating
      competition: $competition
    ) {
      _id
      submissionBody
      submissionDate
      rating
    }
  }
`; 

/* export const DELETE_SUBMISSION = gql`
  mutation deleteSubmission($id: ID!) {
    deleteSubmission(_id: $id) {
      _id
      submissionBody
      submissionDate
      rating
      user {
        _id
        name
      }
      competition {
        _id
        title
      }
    }
  }
`; */

export const EDIT_SUBMISSION = gql`
  mutation EditSubmission(
    $id: ID!,
    $submissionBody: String
    $submissionDate: String
    $rating: Float
  ) {
    editSubmission(
      id: $id
      submissionBody: $submissionBody
      submissionDate: $submissionDate
      rating: $rating
    ) {
      _id
      submissionBody
      submissionDate
      rating
    }
  }
`;
