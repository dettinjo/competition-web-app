const schema = `
type Competition {
    _id: ID!,
    title: String!,
    description: String!,
    excerpt: String!,
    startDate: String!,
    endDate: String!, 
    winnerSubmission: ID!,
}

input CompetitionInput {
    title: String!,
    description: String!,
    excerpt: String!,
    startDate: String!,
    endDate: String!,
}

type Query {
    competitions: [Competition!]!,
    competition(id: ID!): Competition!,
}

type Mutation {
    createCompetition(competitionInput: CompetitionInput): Competition!,
    editCompetition(competitionId: ID!): Competition!,
    deleteCompetition(competitionId: ID!): Competition!,
}
`;

export default schema;
