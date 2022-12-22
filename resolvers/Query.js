const {categories,products, reviews} = require("../db");

exports. Query={
    hello: () => {
      return "Hello world!"
    },
    hi: () => {
      return ["hello everyone!!", "world!"]

    },
    numberOfAnimals: () => {
      return 10;
    },
    price: () => {
      return 4562.2352
    },
    isCool: () => {
      return false;
    },
    products: () => {
      return products;
    },
    categories: ()=>{
      return categories;
    },
    // products: (parent,args,context) => products,
    // product: (parent, args, context) => {
    //   const { id } = args;
      products: (parent,{filter},{products}) => {
        let filteredProducts = products;
        if(filter){
          const {onSale, avgRating} = filter;
          if(onSale){
            filteredProducts = filteredProducts.filter(product =>{
              return product.onSale
            });
          }
          if([1,2,3,4,5].includes(avgRating)){
            filteredProducts = filteredProducts.filter((product)=>{
              let sumRating = 0;
              let numberOfReviews =0;
              reviews.forEach((review) =>{
                if(review.productId === product.id){
                  sumRating += review.rating;
                  numberOfReviews++;
                }
              });
              const avgProductRating = sumRating/numberOfReviews;
              return avgProductRating >=avgRating;
              console.log(avgProductRating,product.name);
            })
          }

        }
        return filteredProducts
      },
      
      product: (parent, {id}, {products}) => {
        return  products.find((product) => product.id === id)   
      
      // const productId = args.id
      // const product = products.find(product => product.id === productId)
      // if (!product) return null;
      // return product;
    },
    // categories: (parent,args, context)=> categories,
    // category: (parent,args, context)=>{
        // const { id } = args.id;
        categories: (parent,args, {categories})=> categories,
        category: (parent,{id}, {categories})=>{
        return categories.find((category) => category.id === id);
        // const category = categories.find((category) => category.id === id);
        // return category;
    },
  }