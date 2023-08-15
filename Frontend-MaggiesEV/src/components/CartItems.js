import React, { useContext } from "react"
import { CartContext } from "../components/CartContext"

import { Row, Col, Button, Form } from "react-bootstrap"
import Icon from "./Icon"
import { removeCartItem, addCartItem } from "../hooks/UseCart"
import Link from "next/link"

import dummyProduct from "../data/dummyproduct.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import Image from "./Image"
import { getDefaultAltImgSrc } from "../my-tools/my-helper"

const CartItems = ({ review, className }) => {
	const [cartItems, dispatch] = useContext(CartContext) // Cart context

	// Decrease product quantity
	const decreaseQuantity = (product) => {
		if (product.quantity > 1) {
			addCartItem(product, product.quantity - 1)
			dispatch({ type: "add", payload: product, quantity: product.quantity })
		}
	}

	// Increase product quantity
	const increaseQuantity = (product) => {
		addCartItem(product, product.quantity + 1)
		dispatch({ type: "add", payload: product, quantity: product.quantity })
	}

	// Remove from cart
	const removeFromCart = (e, product) => {
		e.preventDefault()
		removeCartItem(product);
		dispatch({ type: "remove", payload: product });
	}

	// Add to cart
	const onQuantityChange = (e, product) => {
		const value = e.target.value
		if (value >= 1) {
			addCartItem(product, value)
			dispatch({ type: "add", payload: product, quantity: value })
		}
	}

	return (
		<div className={`cart ${className ? className : ""}`}>
			<div className={review ? "cart-wrapper" : ""}>
				<div className="d-none d-md-block cart-header">
					<Row>
						<Col xs="5">Item</Col>
						<Col xs="2" className="text-center">
							Price
						</Col>
						<Col xs="2" className="text-center">
							Quantity
						</Col>
						<Col xs="2" className="text-center">
							Total
						</Col>
					</Row>
				</div>
				<div className="cart-body">
					{cartItems.map((item) => (
						// Cart items
						<div key={item.name} className="cart-item">
							<Row className="d-flex align-items-center text-start text-md-center">
								<Col xs="12" md={review ? 6 : 5}>
									{/* MOBILE REMOVE FROM CART BUTTON */}
									<a
										className="cart-remove close mt-3 d-md-none"
										href="#"
										onClick={(e) => removeFromCart(e, item)}
									>
										<FontAwesomeIcon icon={faTimes} />
									</a>
									{/* END MOBILE REMOVE FROM CART BUTTON */}

									<div className="d-flex align-items-center">
										{/* PRODUCT IMAGE */}
										<Link href={`/products/${item._id}`}>
											<a>
												<img
													style={{
														width: "80px",
														height: "103px",
														objectFit: "contain",
														backgroundColor: "rgba(0, 0, 0, 0.4)"
													}}
													src={"/img/product/" +  item.imageLinks[0]}
													alt={getDefaultAltImgSrc()}
												/>
											</a>
										</Link>
										{/* END PRODUCT IMAGE */}

										<div className="cart-title text-start">
											{/* PRODUCT TITLE */}
											<Link href={`/products/${item._id}`}>
												<a className="text-dark link-animated">
													<strong>{item.name}</strong>
												</a>
											</Link>
										</div>
									</div>
								</Col>


								<Col xs="12" md={review ? 6 : 7} className="mt-4 mt-md-0">
									<Row className={`align-items-center ${review ? "me-0" : ""}`}>


										<Col md={review ? 4 : 3}>
											<Row>
												<Col xs="6" className="d-md-none text-muted">
													Price per item
												</Col>
												<Col xs="6" md="12" className="text-end text-md-center">
													${item.price}
												</Col>
											</Row>
										</Col>


										<Col md="4">
											<Row className="align-items-center">
												{/* PRODUCT QUANTITY */}
												<Col xs="7" sm="9" className="text-muted d-md-none">
													Quantity
												</Col>
												<Col xs="5" sm="3" md="12">
													{review ? (
														item.quantity
													) : (
														<div className="d-flex align-items-center">
															<Button
																variant="items"
																className="items-decrease"
																onClick={() => decreaseQuantity(item)}
															>
																-
															</Button>
															<Form.Control
																className="text-center border-0 border-md input-items"
																value={item.quantity}
																onChange={(e) => onQuantityChange(e, item)}
																type="text"
																disabled
															/>
															<Button
																variant="items"
																className="items-increase"
																onClick={() => increaseQuantity(item)}
															>
																+
															</Button>
														</div>
													)}
												</Col>
												{/* END PRODUCT QUANTITY */}
											</Row>
										</Col>


										<Col md={review ? 4 : 3}>
											<Row>
												{/* PRICE TOTAL */}
												<Col xs="6" className="d-md-none text-muted">
													Total price
												</Col>
												<Col xs="6" md="12" className="text-end text-md-center">
													${(item.price * item.quantity).toFixed(2)}
												</Col>
												{/* END PRICE TOTAL */}
											</Row>
										</Col>


										{!review && (
											<Col xs="2" className="d-none d-md-block text-center">
												{/* REMOVE FROM CART BUTTON */}
												<a
													className="cart-remove text-muted"
													href="#"
													onClick={(e) => removeFromCart(e, item)}
												>
													<Icon
														icon="close-1"
														className="w-2rem h-2rem svg-icon-light"
													/>
												</a>
												{/* END REMOVE FROM CART BUTTON */}
											</Col>
										)}
									</Row>
								</Col>
							</Row>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CartItems
