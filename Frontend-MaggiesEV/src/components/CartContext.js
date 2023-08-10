import React, { createContext, useReducer } from "react"

const CartContext = createContext({}) // Create cart context

const initialState = []

// Cart context reducer
const reducer = (state, action) => {
	// Assign quantity to product if new
	const finalProduct = action.quantity
		? Object.assign(action.payload, { quantity: parseInt(action.quantity, 10) })
		: action.payload

	// Assign quantity to product if exists in cart
	state.forEach((item) => {
		if (item._id === action.payload._id) {
			item.quantity = parseInt(action.quantity, 10)
		}
	})

	switch (action.type) {
		case "reset":
			return initialState // Reset cart
		case "add":
			return !state.some((item) => item._id === finalProduct._id)
				? [...state, finalProduct]
				: [...state] // If product not in cart add else return cart
		case "remove":
			return state.filter((x) => finalProduct._id !== x._id) // Remove item from cart
	}
}

const CartProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<CartContext.Provider value={[state, dispatch]}>
			{props.children}
		</CartContext.Provider>
	)
}

export { CartContext, CartProvider }
