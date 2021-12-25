const schema = `
type User {
    _id: ID!,
    name: String!,
    email: String!,
    password: String,
    submissions: [Submission!]
    userRole: UserRole!,
    biography: String,
    winner: Boolean
}

enum UserRole {
    ADMIN,
    JUDGE,
    USER,
}

input UserInput {
    name: String!,
    email: String!,
    password: String!,
    userRole: String!,
    biography: String,
}

type AuthData {
    userId: String!,
    userRole: String,
    token: String!,
    email: String!,
}

type Info {
    name: String!
    email: String!
    userRole: String!
}

extend type Query {
    user(id: ID!): User!,
    login(email: String!, password: String!): AuthData!,
    me: Info,
}

extend type Mutation {
    createUser( 
        name: String!,
        email: String!,
        password: String!,
        userRole: String!,
        biography: String,
        winner: Boolean,
        ): User!,
        
    editUser(id: ID!, winner: Boolean): User!,
    deleteUser(userId: ID!): User!,
}
`;

export default schema;
