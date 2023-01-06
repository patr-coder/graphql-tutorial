// String, Int, Float, Boolean 
const { gql } = require("apollo-server");

exports.typeDefs = gql `
     type Query {
        hello: String!
        hi: [String!]!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        users:[User!]!
        user(id:ID!):User

      #   products:[Product!]!
        products(filter: ProductsFilterInput):[Product!]!
        product(id:ID!):Product
        categories: [Category!]!
        category(id: ID! ): Category
        reviews:[Review!]!
        review(id: ID!):Review!
        
     }
     type User{
      id:ID!
      name:String!
      last_name : String!
      email:String!
      number: String!
      isAdmin: Boolean !
      password : String!
     }
     type Mutation{
      addCategory(input: AddCategoryInput!): Category!
      addProduct(input: AddProductInput!): Product!
      addReview(input: AddReviewInput!): Review!
      deleteCategory(id: ID!):Boolean!
      deleteProduct(id: ID!):Boolean!
      deleteReview(id:ID!): Boolean!
      updateCategory(id:ID!, input: UpdateCategoryInput!):Category
      updateProduct(id:ID!, input: UpdateProductInput!):Product
      updateReview(id:ID!, input: UpdateReviewInput!):Review
      addUser(input: AddUserInput!):User!
      deleteUser(id:ID!):Boolean!
      updateUser(id:ID!, input: UpdateUserInput!):User!
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
        reviews:[Review!]!
     }
     type Category {
        id: ID!
        name: String!
      #   products: [Product!]!
        products(filter:ProductsFilterInput):[Product!]!
     }
     type Review{
      id:ID!
      date: String!
      title: String!
      comment:String!
      rating: Int!
      product:Product
     }
     input ProductsFilterInput{
      onSale: Boolean 
      avgRating:Int
     }
     input AddCategoryInput{
      name: String!
     }
     input UpdateCategoryInput{
      name: String!
     }
     input UpdateProductInput{
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: String!
     }
     input AddProductInput{
      name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: String!
      
     }
     input AddReviewInput{
      date: String!
      title:String!
      comment:String!
      rating: Int!
      productId:ID!

     }
     input UpdateReviewInput{
      date: String!
      title:String!
      comment:String!
      rating: Int!
      productId:ID!

     }
     input AddUserInput{
      name:String!
      last_name : String!
      email : String!
      number : String!
      isAdmin: Boolean !
      password : String!
     }
     input UpdateUserInput{
      name:String!
      last_name : String!
      email : String!
      number : String!
      isAdmin: Boolean !
      password : String!
     }
`;