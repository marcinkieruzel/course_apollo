import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Phone {
    id: ID
    title: String
    description: String
    price: Int
    discountPercentage: Float
    rating: Float
    stock: Int
    brand: String
    category: String
    thumbnail: String
    images: [String]
  }

  type Query {
    getPhones: [Phone]
    getPhone(id: ID): Phone
  }
`;

export default typeDefs;
