import React from "react"
import Link from "next/link"

import { Badge } from "react-bootstrap"

import Stars from "../Stars"
import Icon from "../Icon"

// import Image from "../Image"
import Image from 'react-bootstrap/Image';
import { getDefaultAltImgSrc } from "../../my-tools/my-helper"

const CardProductDefault = ({
	product,
	masonry,
	addToCart,
	addToWishlist,
	setQuickView,
	isForManagment
}) => {


	const productHref = `/products/${product._id}`;


	const productHoverOverlay = (
		<div className="product-hover-overlay">
			<a
				className="text-dark text-sm"
				aria-label="add to cart"
				href="#"
				onClick={(e) => addToCart(e, product)}
			>
				<span className="d-none d-sm-inline">Add to cart</span>
			</a>


		</div>
	);


	if (isForManagment) {

		const editProductHref = `/manage-products/edit-product/${product._id}`;

		productHoverOverlay = (
			<div className="product-hover-overlay">
				<Link className="text-dark text-sm" href={editProductHref}>Edit Product</Link>
			</div>
		);
	}



	return (
		<div
			className={`product product-type-0`}
			data-aos="zoom-in"
			data-aos-delay="0"
			style={{
				
			}}
		>
			<div className="product-image mb-md-3">

				<Link href={productHref}>
					<a>
						<img
							style={{
								width: "100%",
								height: "350px",
								objectFit: "contain",
								backgroundColor: "rgba(0, 0, 0, 0.4)"
							}}
							src={"/img/product/" + product.imageLinks[0]}
							alt={getDefaultAltImgSrc()}
						/>
						
					</a>
				</Link>

				{productHoverOverlay}

			</div>



			<div className="position-relative">
				<h3 className="text-base mb-1">
					<Link href={productHref}>
						<a className="text-dark">{product.name}</a>
					</Link>
				</h3>
				<span className="text-gray-500 text-sm">${product.price}</span>
			</div>
		</div>
	)
}

export default CardProductDefault
