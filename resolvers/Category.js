// const {products} = require("../db");
exports. Category ={
    // products: (parents,args, context) =>{
    //   const categoryId = parent.id;
    products: ({id:categoryId}, {filter},{products})=>{
      // return products.filter((product)=> product.categoryId === categoryId);
      const categoryProducts =  products.filter((product)=> product.categoryId === categoryId);
      let filteredCategoryProducts = categoryProducts;

      if(filter){
        if(filter.onSale === true){
          filteredCategoryProducts = filteredCategoryProducts.filter(product =>{
            return product.onSale
          })
        }
      }
      return filteredCategoryProducts;
    },
  }