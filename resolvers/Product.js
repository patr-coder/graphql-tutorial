// const {categories} = require("../db");
exports.Product ={
    // category:(parent,args,context)=>{
    //   const categories = context.categories
    //   const categoryId = parent.categoryId;
      // category:({categoryId}, args,{categories})=>{
        category:({categoryId}, args,{db})=>{
      return db.categories.find((category)=> category.id === categoryId);
    },
    reviews:(parent,args,{db})=> reviews,
    reviews:({id}, args,{db})=>{
      return db.reviews.filter((review)=> review.productId === id);
    }
    }