import React from "react"

import { CartContext } from "../CartContext"
import { addCartItem } from "../../hooks/UseCart"
import { addWishlistItem } from "../../hooks/UseWishlist"
import { WishlistContext } from "../WishlistContext"
import CardProductDefault from "./Default"
const CardProduct = ({ product, masonry, cardType, isForManagment }) => {

	const [cartItems, dispatch] = React.useContext(CartContext)
	const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext)
	const [quickView, setQuickView] = React.useState(false)



	const addToCart = (e, product) => {
		e.preventDefault()
		addCartItem(product, "1")
		dispatch({ type: "add", payload: product, quantity: "1" })
	}


	const addToWishlist = (e, product) => {
		e.preventDefault()
		addWishlistItem(product)
		wishlistDispatch({ type: "add", payload: product })
	}


	const params = {
		setQuickView: setQuickView,
		product: product,
		addToCart: addToCart,
		addToWishlist: addToWishlist,
		quickView: quickView,
		masonry: masonry,
		isForManagment: isForManagment
	}



	return (
		<>
			<CardProductDefault {...params} />
		</>
	)
}

export default CardProduct
