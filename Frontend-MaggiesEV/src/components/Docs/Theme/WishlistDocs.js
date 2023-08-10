import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import WishlistItems from '../../WishlistItems'

const WishlistDocs = () => {
    return (
        <div id="wishlist" className="docs-item element">
            <h5 className="text-uppercase mb-4">Wishlist</h5>
            <div className="docs-desc">
                <p className="lead">Wishlist is dynamic and uses combination of <a href="https://reactjs.org/docs/context.html">React context API</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">Local Storage API</a>. Thanks to that, users wishlist items are stored even after he leaves the store. Wishlist is also immediately updated after adding or removing items from it.</p>
                <p className="lead my-3"><b>Remove automatic demo data adding to wishlist</b> - please follow comments in code of Header component (useEffect part) to remove adding of demo data</p>
                <p><b>WishlistItems component</b> - A responsive wishlist component used in wishlist overview. On smaller displays, a horizontal srollbar appears.</p>
                <div>
                    <WishlistItems />
                </div>
                
                <p className="mt-4"><b>Add item to wishlist</b> - see CardProduct component</p>
                <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded shadow p-4">
                    {addItemCode}
                </SyntaxHighlighter>
                <p className="mt-4"><b>Remove item from wishlist</b> - see WishlistItems component</p>
                <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded shadow p-4">
                    {removeItemCode}
                </SyntaxHighlighter>
            </div>

        </div>
    )
};

export default WishlistDocs;

const addItemCode =
    `
import { addWishlistItem } from '../hooks/UseWishlist'
import { WishlistContext } from './WishlistContext'

const Component = ({ item }) => {

    const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext)

    const addToWishlist = (e,product) => {
        e.preventDefault()
        addWishlistItem(product)
        wishlistDispatch({type: 'add', payload: product})
    }
    
    return (
        <a href="#" onClick={(e) => addToWishlist(e,product)}>
            Add item
        </a>
    )
}

export default Component
`

const removeItemCode =
    `
import { removeWishlistItem } from '../hooks/UseWishlist'
import { WishlistContext } from './WishlistContext'

const Component = ({ item }) => {

    const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext)

    const removeFromWishlist = (e, product) => {
        e.preventDefault()
        dispatch({ type: 'remove', payload: product })
        removeWishlistItem(product)
    }
    
    return (
        <a href="#" onClick={(e) => removeFromWishlist(e,product)}>
            Add item
        </a>
    )
}

export default Component
`
