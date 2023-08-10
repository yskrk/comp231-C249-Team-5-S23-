import React from 'react';

const WishlistContext = React.createContext({}) // Create wishlist context

const initialState = []

// Wishlist context reducer
const reducer = (state, action) => {
  
  switch (action.type) {
    case "reset":
      return initialState;
    case "add":
      return !state.some(item => item.slug === action.payload.slug) ? [...state, action.payload] : [...state] // If product not in wishlist add else return wishlist
    case "remove":
      return state.filter(x => action.payload.slug !== x.slug) // Remove item from wishlist
  }
}

const WishlistProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <WishlistContext.Provider value={[state, dispatch]}>
      {props.children}
    </WishlistContext.Provider>
  );
}

export { WishlistContext, WishlistProvider };