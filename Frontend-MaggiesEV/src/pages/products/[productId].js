import React, { useState } from "react"
import {
	Container,
	Row,
	Col,
	Alert,
	Form,
	Button,
	InputGroup,
} from "react-bootstrap"


import dummyProduct from "../../data/dummyproduct.json"
import ProductBottomTabs from "../../components/ProductBottomTabs"
import SwiperGallery from "../../components/SwiperGallery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { useRouter } from "next/router"
import { displayJsonContents } from "../../my-tools/my-helper";
import { addCartItem } from "../../hooks/UseCart"
import { CartContext } from "../../components/CartContext"
import AddedToCartAlert from "./addedToCartAlert"
import MaggieAddedToCartAlert from "./MaggieAddedToCartAlert"



export async function getServerSideProps(context) {
	const { productId } = context.params;

	// Fetch the product data using productId
	const response = await fetch("http://localhost:3003/products/" + productId)
	const data = await response.json();

	displayJsonContents(data);

	// Modify imageLinks of product.
	const updatedImageLinks = [];
	data.product.imageLinks.forEach(imageLink => {
		updatedImageLinks.push("/img/product/" + imageLink);
	});

	data.product.imageLinks = updatedImageLinks;

	return {
		props: {
			product: data.product
		},
	};
}



const ProductDetails = (props) => {

	const [cartItems, dispatch] = React.useContext(CartContext)
	const [product, setProduct] = useState(props.product);
	const [alert, setAlert] = React.useState(false)

	console.log("The product obj...");
	displayJsonContents(props.product);


	const addToCart = (e) => {
		e.preventDefault()
		console.log("EVENT: addToCart()");
		displayJsonContents(product);
		addCartItem(product, "1")
		dispatch({ type: "add", payload: product, quantity: "1" })

		setAlert(true);
	}

	const removeAlert = (val) => {
		setAlert(false);
	};


	return (
		<React.Fragment>
			<section>

				<Container className="pt-5">

					<MaggieAddedToCartAlert visible={alert} setVisible={removeAlert} />

					<Row>


						<Col lg="7" className="order-2 order-lg-1">
							<SwiperGallery data={product?.imageLinks} />
						</Col>


						<Col lg="5" className="ps-lg-4 order-1 order-lg-2">

							{/* Title */}
							<h1 className="h2 mb-4">{product?.name}</h1>

							<div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
								<ul className="list-inline mb-2 mb-sm-0">
									<li className="list-inline-item h4 fw-light mb-0">
										{/* Price */}
										${product?.price.toFixed(2)}
									</li>
								</ul>
							</div>

							{/* Description */}
							<p className="mb-4 text-muted">
								{dummyProduct.description.short}
							</p>


							<Form>

								<ul className="list-unstyled">
									<li>
										<strong>Category:&nbsp;</strong>
										<a className="text-muted" href="#">
											{product.category}
										</a>
									</li>
								</ul>

								<Row className="mb-4">
									<Col xs="6">
										<a href="#">
											<FontAwesomeIcon icon={faHeart} className="me-2" />
											Add to wishlist
										</a>
									</Col>
								</Row>


								<InputGroup className="w-100 mb-4">
									<div className="flex-grow-1">
										<div className="d-grid h-100">
											<Button variant="dark" type="submit" size="lg" onClick={(e) => addToCart(e)}>
												<FontAwesomeIcon
													icon={faShoppingCart}
													className="me-2"
												/>
												Add to Cart
											</Button>
										</div>
									</div>
								</InputGroup>

							</Form>
						</Col>


					</Row>
				</Container>
			</section>


			<ProductBottomTabs product={dummyProduct} />


		</React.Fragment>
	)
}

export default ProductDetails
