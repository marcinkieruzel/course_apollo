import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Quote {
    id: ID
    quote: String
    author: String
  }

  type Query {
    getQuotes: [Quote]
    getQuote(id: ID): Quote
  }

  input QuoteInput {
    quote: String
    author: String
  }

  type Mutation {
    addQuote(input: QuoteInput): Quote
    updateQuote(id: ID, input: QuoteInput): Quote
    deleteQuote(id: ID): String
  }
`;

export default typeDefs;
