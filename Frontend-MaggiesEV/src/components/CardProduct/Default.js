import React from "react"
import Link from "next/link"

import { Badge } from "react-bootstrap"

import Stars from "../Stars"
import Icon from "../Icon"

import Image from "../Image"
import { getDefaultAltImgSrc } from "../../my-tools/my-helper"

const CardProductDefault = ({
	product,
	masonry,
	addToCart,
	addToWishlist,
	setQuickView,
}) => {


	const productHref = `/products/${product._id}`;


	return (
		<div
			className={`product product-type-0`}
			data-aos="zoom-in"
			data-aos-delay="0"
		>
			<div className="product-image mb-md-3">

				<Link href={productHref}>
					<a>
						<Image
							className="img-fluid"
							src={"/img/product/0987188250_1_1_1.jpg"}
							alt={getDefaultAltImgSrc()}
							layout="responsive"
							width={408}
							height={523}
						/>
					</a>

				</Link>



				<div className="product-hover-overlay">
					<a
						className="text-dark text-sm"
						aria-label="add to cart"
						href="#"
						onClick={(e) => addToCart(e, product)}
					>
						<Icon
							className="text-hover-primary svg-icon-heavy d-sm-none"
							icon="retail-bag-1"
						/>
						<span className="d-none d-sm-inline">Add to cart</span>
					</a>


				</div>

			</div>



			<div className="position-relative">
				<h3 className="text-base mb-1">
					<Link href={productHref}>
						<a className="text-dark">{product.name}</a>
					</Link>
				</h3>
				<span className="text-gray-500 text-sm">${product.price}.00</span>
			</div>
		</div>
	)
}

export default CardProductDefault
