// const {categories} = require("../db");
exports.Product ={
    // category:(parent,args,context)=>{
    //   const categories = context.categories
    //   const categoryId = parent.categoryId;
      category:({categoryId}, args,{categories})=>{
      return categories.find((category)=> category.id === categoryId);
    },
    reviews:({id}, args,{reviews})=>{
      return reviews.filter((review)=> review.productId === id);
    }
    }