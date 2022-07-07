import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
  }

  input UserInput {
    name: String
    email: String
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID, input: UserInput): User
    deleteUser(id: ID) : String
  }

  type Query {
    getUsers(limit: Int): [User]
    getUser(id: ID): User
  }
`;

export default typeDefs;
