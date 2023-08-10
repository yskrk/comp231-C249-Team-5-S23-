import React from "react"

import { Button, CloseButton, Modal } from "react-bootstrap"

import { CartContext } from "../components/CartContext"
import { removeCartItem } from "../hooks/UseCart"
import Icon from "./Icon"
import Link from "next/link"
import Image from "./Image"

const SidebarCart = (props) => {
  const [cartItems, dispatch] = React.useContext(CartContext)

  const removeFromCart = (product) => {
    dispatch({ type: "remove", payload: product })
    removeCartItem(product)
  }
  const headerClose = (
    <CloseButton
      className="modal-close  btn-close-lg btn-close-rotate opacity-8"
      type="button"
      onClick={props.toggle}
    />
  )

  return (
    <Modal
      className="modal-right"
      contentClassName="sidebar-cart-content"
      show={props.isOpen}
      onHide={props.toggle}
    >
      <Modal.Header className="border-0 mb-3">{headerClose}</Modal.Header>
      <Modal.Body className="px-5 sidebar-cart-body">
        {cartItems.length > 0 ? (
          <div className="sidebar-cart-product-wrapper custom-scrollbar">
            {cartItems.map((item) => (
              <div key={item.slug} className="navbar-cart-product">
                <div className="d-flex align-items-center">
                  <Link href={`/${item.category[1]}/${item.slug}`}>
                    <a>
                      <Image
                        className="img-fluid navbar-cart-product-image"
                        src={item.img.category[0].img}
                        alt={item.img.category[0].alt}
                        width={80}
                        height={103}
                      />
                    </a>
                  </Link>
                  <div className="w-100">
                    <a
                      className="navbar-cart-product-remove"
                      onClick={() => removeFromCart(item)}
                      href="#"
                    >
                      <Icon className="sidebar-cart-icon" icon="close-1" />
                    </a>
                    <div className="ps-3">
                      <Link href={`/${item.category[1]}/${item.slug}`}>
                        <a className="navbar-cart-product-link text-dark link-animated">
                          {item.name}
                        </a>
                      </Link>
                      <small className="d-block text-muted">
                        Quantity: {item.quantity ? item.quantity : 1}
                      </small>
                      <strong className="d-block text-sm">
                        $
                        {item.quantity
                          ? item.price * item.quantity
                          : item.price}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mb-5">
            <Icon
              className="w-3rem h-3rem svg-icon-light mb-4 text-muted"
              icon="retail-bag-1"
            />
            <p>Your cart is empty </p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="sidebar-cart-footer">
        <div className="w-100">
          <h5 className="mb-4">
            Subtotal: <span className="float-end">$465.32</span>
          </h5>
          <Link passHref href="/cart">
            <Button variant="outline-dark" className="mb-3 w-100" href="/cart">
              View cart
            </Button>
          </Link>
          <Link passHref href="/checkout">
            <Button variant="dark" className="w-100">
              Checkout
            </Button>
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default SidebarCart
