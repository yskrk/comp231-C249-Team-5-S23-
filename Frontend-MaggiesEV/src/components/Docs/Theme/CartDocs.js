import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import CartItems from '../../CartItems'

const CartDocs = () => {
    return (
        <div id="cart" className="docs-item element">
            <h5 className="text-uppercase mb-4">Cart</h5>
            <div className="docs-desc">
                <p className="lead">Cart is dynamic and uses combination of <a href="https://reactjs.org/docs/context.html">React context API</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">Local Storage API</a>. Thanks to that, users cart items are stored even after he leaves the store. Cart is also immediately updated after adding or removing items from it.</p>
                <p className="lead my-3"><b>Remove automatic demo data adding to cart</b> - please follow comments in code of Header component (useEffect part) to remove adding of demo data</p>
                <p><b>CartItems component</b> - A responsive cart component used in cart overview or final order review. On smaller displays, a horizontal srollbar appears.</p>
                <div>
                    <CartItems />
                </div>
                
                <p className="mt-4"><b>Add item to cart</b> - see CardProduct component</p>
                <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded shadow p-4">
                    {addItemCode}
                </SyntaxHighlighter>
                <p className="mt-4"><b>Remove item from cart</b> - see CartItems component</p>
                <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded shadow p-4">
                    {removeItemCode}
                </SyntaxHighlighter>
                <p className="mt-4"><b>Change quantity of cart item</b> - see CartItems component</p>
                <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded shadow p-4">
                    {quantityItemCode}
                </SyntaxHighlighter>
            </div>

        </div>
    )
};

export default CartDocs;

const addItemCode =
    `
import { addCartItem } from '../hooks/UseCart'
import { CartContext } from '../components/CartContext'

export default ({ item }) => {

    const [cartItems, dispatch] = React.useContext(CartContext)

    const addToCart = (e,product) => {
        e.preventDefault()
        addCartItem(product, "1")
        dispatch({type: 'add', payload: product, quantity: "1"})
    }
    
    return (
        <a href="#" onClick={(e) => addToCart(e,item)}>
            Add item
        </a>
    )
}`

const removeItemCode =
    `
import { removeCartItem } from '../hooks/UseCart'
import { CartContext } from '../components/CartContext'

const Component = ({ item }) => {

    const [cartItems, dispatch] = React.useContext(CartContext)

    const removeFromCart = (e,product) => {
        e.preventDefault()
        dispatch({type: 'remove', payload: product})
       removeCartItem(product)
    }
    
    return (
        <a href="#" onClick={(e) => removeFromCart(e,item)}>
            Add item
        </a>
    )
}

export default Component
`

const quantityItemCode =
    `
import { removeCartItem } from '../hooks/UseCart'
import { CartContext } from '../components/CartContext'

const Component = ({ item }) => {

    const [cartItems, dispatch] = React.useContext(CartContext)

    const decreaseQuantity = (product) => {
        if(product.quantity > 1) {
            addCartItem(product, product.quantity - 1)
            dispatch({type: 'add', payload: product, quantity: product.quantity})
        }
       
    }

    const increaseQuantity = (product) => {
        addCartItem(product, product.quantity + 1)
        dispatch({type: 'add', payload: product, quantity: product.quantity})
    }
    
    return (
        <>
        <button onClick={() => decreaseQuantity(item)}>-</button>
        <button onClick={() => increaseQuantity(item)}>+</button>
        </>
    )
}

export default Component
`