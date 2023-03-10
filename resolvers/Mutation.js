const {v4: uuid} = require("uuid")
exports.Mutation ={
    addCategory: (parent, {input}, {db}) =>{
        const {name} = input;
        const newCategory = {
            id: uuid(),
            name

        }
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {db}) =>{
        const {
            name,
            description,
            image,
            price,
            onSale,
            quantity,
            categoryId


        } = input;
        const newProduct = {
            id: uuid(),
            name,
            description,
            image,
            price,
            onSale,
            quantity,
            categoryId,
        }
        db.products.push(newProduct)
        return newProduct;
    },
   addReview: (parent, {input}, {db}) => {
        const {date,
            title,
            comment,
            rating,
            productId
    } = input;
    const newReview = {
        id: uuid(),
        date,
        title,
        comment,
        rating,
        productId
    }
    db.reviews.push(newReview);
    return newReview;
    },
    deleteCategory:(parent, {id}, {db})=>{
        db.categories = db.categories.filter((category) => category.id !==id);
        db.products = db.products.map(product =>{
            if(product.categoryId ===id)return{
                ...product,
                categoryId: null,
            };
            else return product;
        })
        return true
    },
    deleteProduct:(parent, {id}, {db})=>{
        db.products = db.products.filter((product)=> product.id !==id);
        db.reviews = db.reviews.filter((review) => review.id !==id);
        return true
    },
    deleteReview:(parent,{id}, {db})=>{
        db.reviews = db.reviews.filter((review) => review.id !==id);
        return true;
    },
    updateCategory:(parent, {id, input}, {db})=>{
        const index = db.categories.findIndex((category) => category.id === id);
        console.log(index);
        if(index === -1 ) return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input,
        };
        return db.categories[index];
    },
    updateProduct:(parent,{id,input}, {db})=>{
        const index = db.products.findIndex((product) => product.id === id);
        console.log(index);
        if(index === -1 ) return null;
        db.products[index] = {
            ...db.products[index],
            ...input,
        };
        return db.products[index];
    },
    updateReview:(parent,{id,input}, {db})=>{
        const index = db.reviews.findIndex((require) => review.id === id);
        console.log(index);
        // if(index ===-1 ) return null;
        db.reviews[index] = {
            ...db.reviews[index],
            ...input,
        };
        return db.reviews[index];
},
addUser:(parent,{input},{db})=>{
    const {name,last_name, email,number,isAdmin,password} = input;
    const newUser ={
        id:uuid(),
        name,
        last_name,
        email,
        number,
        isAdmin,
        password,
    }
    db.users.push(newUser);
    return newUser;
},
deleteUser:(parent,{id}, {db})=>{
    db.users = db.users.filter((user) => user.id !== id);
    return true;
},
updateUser:(parent,{id, input}, {db})=>{
    const index = db.users.findIndex((user) => user.id === id);
    console.log(index);
    if(index === -1) return null;
    db.users[index] ={
        ...db.users[index],
        ...input,
    };
    return db.users[index];
}

}