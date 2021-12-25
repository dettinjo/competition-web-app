const schema = `
type Submission {
    _id: ID!,
    submissionBody: String!,
    submissionDate: String!,
    rating: Float,
    user: User!,
    competition: Competition!,
}

input SubmissionInput {
    submissionBody: String!,
    submissionDate: String!,
    rating: Float,
    user: ID!,
    competition: ID!
}

extend type Query {
    submissions: [Submission!]!
    submission(id: ID!): Submission!,
    winner: Submission!,
}

extend type Mutation {
    createSubmission(
        submissionBody: String!,
        submissionDate: String!,
        rating: Float,
        competition: ID!
        ): Submission!,
    rateSubmission(id: ID!, rating: Float!): Submission!,
    editSubmission(
        id: ID!, 
        submissionBody: String,
        submissionDate: String,
        rating: Float
        ): Submission!,
    deleteSubmission(submissionId: ID!): Submission!,
}

`;

export default schema;
