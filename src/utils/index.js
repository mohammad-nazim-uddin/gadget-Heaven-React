import toast from "react-hot-toast"

const getAllFavorites = () =>{
    const all = localStorage.getItem('favorites')
    
    if(all){
        const favorites = JSON.parse(all)
        return favorites
    }
    else{
        return []
    }

}
const addFavorite = (product) => {
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.product_id == product.product_id);
    if (isExist){
        return toast.error('already added')
    }
    console.log(favorites)
    favorites.push(product)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success("Successfully added")
}

const removeFavorite = id =>{
    const favorites = getAllFavorites();
    const remaining = favorites.filter(product => product.product_id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success("Successfully removed")

}

const clearFavorites = () => {
    localStorage.removeItem('favorites'); // Removes all favorites from local storage
    
};

// wishlisht
const getAllWishlist = () =>{
    const all = localStorage.getItem('wishlist')
    if(all) {
        const wishlist = JSON.parse(all)
        return wishlist
    }
    else{
        return []
    }
}

const addTowishlist = (product)=>{
    const wishlisht = getAllWishlist();
    const isExist = wishlisht.find(item => item.product_id == product.product_id)
    if(isExist){
        return toast.error('already ase!!notun dekho')
    }
    console.log(wishlisht)
    wishlisht.push(product)
    localStorage.setItem('wishlist', JSON.stringify(wishlisht))
    toast.success("Successfully added")

}

const removeWish = id =>{
    const wishlist = getAllWishlist();
    const remaining = wishlist.filter(product => product.product_id != id)
    localStorage.setItem('wishlist', JSON.stringify(remaining))
    toast.success("Successfully removed")

}

const clearWishlist = () => {
    localStorage.removeItem('wishlist'); // Removes all favorites from local storage
    
};

export {addFavorite, getAllFavorites, removeFavorite, clearFavorites, addTowishlist, getAllWishlist, clearWishlist, removeWish}