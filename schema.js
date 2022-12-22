// String, Int, Float, Boolean 
const { gql } = require("apollo-server");

exports.typeDefs = gql `
     type Query {
        hello: String!
        hi: [String!]!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
      #   products:[Product!]!
        products(filter: ProductsFilterInput):[Product!]!
        product(id:ID!):Product
        categories: [Category!]!
        category(id: ID! ): Category
       
        

     }

     type Product {
        id:ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category!
        reviews:[Reviews!]!
        
     }
     type Category {
        id: ID!
        name: String!
        products: [Product!]!
     }
     type Reviews{
      id:ID!
      date: String!
      title: String!
      comment:String!
      rating: Int!
     }
     input ProductsFilterInput{
      onSale: Boolean 
      avgRating:Int
     }
`;