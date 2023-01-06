exports.Review ={

    product:(parent, args, {db})=>{
        console.log(parent)
        const productId = parent.id;
        return db.products.find((product)=> product.id === productId);
    },
}