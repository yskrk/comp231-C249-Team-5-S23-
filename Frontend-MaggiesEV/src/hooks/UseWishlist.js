export const removeWishlistItem = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')); // Get wishlist from local storage
    const filteredWishlist = wishlist.filter(x => product.slug !== x.slug) // Remove item from context
    localStorage.setItem('wishlist', JSON.stringify(filteredWishlist)) // Set updated wishlist to local storage
}

export const addWishlistItem = (product, quantity) => {
    const oldWishlist = localStorage.getItem('wishlist') // Get wishlist from local storage
    const wishlist = oldWishlist ? JSON.parse(oldWishlist) : [] // Parse wishlist if not empty else empty array
    const newWishlist = !wishlist.some(item => item.slug === product.slug) ? 
        [...wishlist, product] : [...wishlist] // If product not in wishlist add else return wishlist
    localStorage.setItem('wishlist', JSON.stringify(newWishlist)) // Set updated wishlist to local storage
}
