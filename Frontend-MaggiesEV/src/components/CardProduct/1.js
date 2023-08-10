import React from "react"
import Link from "next/link"

import { Badge, Button } from "react-bootstrap"

import Stars from "../Stars"
import Icon from "../Icon"

import Image from "../Image"
import Colors from "./Colors"

const CardProduct1 = ({
  product,
  addToCart,
  addToWishlist,
  setQuickView,
  quickView,
}) => {
  return (
    <div
      className={`product product-type-1`}
      data-aos="zoom-in"
      data-aos-delay="0"
    >
      <div className="product-image border-0">
        {product.new && <div className="product-label bg-info">Fresh</div>}
        {product.sale && <div className="product-label bg-primary">Sale</div>}
        {product.soldout && (
          <div className="product-label bg-danger">Sold out</div>
        )}

        <Image
          className="img-fluid"
          src={product.img.category[0].img}
          alt={product.img.category[0].alt}
          layout="responsive"
          width={408}
          height={523}
        />

        <div className="product-hover-overlay">
          <Link
            href={
              product.category
                ? `/${product.category[1]}/${product.slug}`
                : product.link
            }
          >
            <a className="product-hover-overlay-link" />
          </Link>
          <Button
            size="lg"
            variant="link"
            className="product-wishlist text-dark p-0"
            href="#!"
            onClick={(e) => addToWishlist(e, product)}
            aria-label="add to wishlist"
          >
            <Icon className="svg-icon-md svg-icon-heavy" icon="heart-1" />
          </Button>
          <div className="product-hover-overlay-buttons">
            <ul className="list-unstyled">
              <li className="my-2">
                <Button
                  variant="outline-dark"
                  className="product-btn-animated d-none d-sm-inline-block w-100 px-3 py-0"
                  onClick={(e) => {
                    e.preventDefault()
                    setQuickView(!quickView)
                  }}
                  aria-label="open quickview"
                  href="#!"
                >
                  <span className="product-animated-text">Quick view</span>
                  <span className="product-animated-icon">
                    <Icon
                      className="svg-icon-sm svg-icon-heavy"
                      icon="expand-1"
                    />
                  </span>
                </Button>
              </li>
              <li className="my-2">
                <Button
                  variant="outline-dark"
                  className="product-btn-animated d-none d-sm-inline-block w-100 px-3 py-0"
                  onClick={(e) => addToCart(e, product)}
                  aria-label="add to cart"
                  href="#!"
                >
                  <span className="product-animated-text">Quick shop</span>
                  <span className="product-animated-icon">
                    <Icon
                      className="svg-icon-sm svg-icon-heavy"
                      icon="cart-1"
                    />
                  </span>
                </Button>
              </li>
            </ul>
          </div>
          <div className="product-info p-3 position-absolute bottom-0 start-0">
            <h3 className="h6 mb-1">
              <a className="text-dark" href="../detail-1.html">
                White Tee
              </a>
            </h3>
            <p className="text-muted mb-2">
              <s className="me-2 text-gray-500">${product.price}.00</s>
              {/* Only for DEMO purposes - change on production */}
              <span>$20.00</span>
            </p>
            {product.img.category.length > 1 && (
              <Colors
                disabled
                options={product.img.category}
                id={product.slug}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct1
