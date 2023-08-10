export const removeCartItem = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) // Get cart from local storage
    const filteredCart = cart.filter(x => product.slug !== x.slug) // Remove item from context
    localStorage.setItem('cart', JSON.stringify(filteredCart)) // Set updated cart to local storage
}

export const addCartItem = (product, quantity) => {
    const oldCart = localStorage.getItem('cart') // Get cart from local storage
    const cart = oldCart ? JSON.parse(oldCart) : [] // Parse cart if not empty else empty array
    const finalProduct = Object.assign(product, { quantity: parseInt(quantity, 10) }) // Assign quantity to product

    // cart.forEach(item => { if (item.slug === product.slug) { item.quantity = parseInt(quantity, 10) } }) // Add quantity to product in cart state if exists

    // Add quantity to product in cart state if exists
    cart.forEach(item => {
        if (item._id === product._id) {
            item.quantity = parseInt(quantity, 10);
        }
    });

    const newCart = !cart.some(item => item._id === finalProduct._id) ?
        [...cart, finalProduct] : [...cart] // If product not in cart add else return cart
    localStorage.setItem('cart', JSON.stringify(newCart)) // Set updated cart to local storage
}
