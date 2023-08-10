import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

import OrderSummary from "../components/OrderSummary"
import CartItems from "../components/CartItems"

export async function getStaticProps() {
	return {
		props: {
			title: "Shopping cart",
		},
	}
}
import { CartContext } from "../components/CartContext"

const Cart = () => {
	const [cartItems, dispatch] = React.useContext(CartContext)
	return (
		<React.Fragment>


			<section className="hero py-6">
				<Container>
					<div className="hero-content">
						<h1 className="hero-heading">Shopping cart</h1>
					</div>
				</Container>
			</section>


			<section>
				<Container>
					<Row className="mb-5">
						<Col lg="8" className="pe-xl-5">
							<CartItems className="mb-5" />
						</Col>
						<Col lg="4">
							<OrderSummary showProceedToCheckout />
						</Col>
					</Row>
				</Container>
			</section>


		</React.Fragment>
	)
}

export default Cart
