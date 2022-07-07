import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        test: String
    }
`;

export default typeDefs;
