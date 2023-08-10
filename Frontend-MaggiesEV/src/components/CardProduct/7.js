import React, { useState } from "react"
import Link from "next/link"

import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"

import Icon from "../Icon"

import Image from "../Image"
import Colors from "./Colors"

const CardProduct7 = ({
  product,
  addToCart,
  addToWishlist,
  setQuickView,
  quickView,
}) => {
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <div
      className={`product product-type-7`}
      data-aos="zoom-in"
      data-aos-delay="0"
    >
      <div className="product-image border-0">
        {product.new && <div className="ribbon ribbon-info">Fresh</div>}
        {product.sale && <div className="ribbon ribbon-primary">Sale</div>}
        {product.soldout && (
          <div className="ribbon ribbon-danger">Sold out</div>
        )}
        <div className="product-img-holder position-relative">
          {product.img.category.length > 1 ? (
            <React.Fragment>
              <Image
                className="img-fluid"
                src={product.img.category[0].img}
                alt={product.img.category[0].alt}
                layout="responsive"
                width={408}
                height={523}
              />
              <div className="position-absolute w-100 h-100 start-0 top-0">
                <Image
                  className="img-fluid alt-product-img"
                  src={product.img.category[1].img}
                  alt={product.img.category[1].alt}
                  layout="responsive"
                  width={408}
                  height={523}
                  style={selectedImage === 1 && { opacity: 1 }}
                />
              </div>
            </React.Fragment>
          ) : (
            <Image
              className="img-fluid"
              src={product.img.category[0].img}
              alt={product.img.category[0].alt}
              layout="responsive"
              width={408}
              height={523}
            />
          )}
        </div>
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
            variant="link"
            size="lg"
            className="product-wishlist text-dark p-0"
            href="#!"
            onClick={(e) => addToWishlist(e, product)}
            aria-label="add to wishlist"
          >
            <Icon className="svg-icon-md svg-icon-heavy" icon="heart-1" />
          </Button>
          <div className="product-hover-overlay-buttons overflow-hidden w-100">
            <Button
              variant="dark"
              className="py-3 w-100"
              href="#!"
              onClick={(e) => addToCart(e, product)}
              aria-label="add to cart"
            >
              <Icon className="svg-icon-sm me-2 svg-icon-heavy" icon="cart-1" />
              {product.img.category.length > 1
                ? "Select options"
                : "Add to cart"}
            </Button>
          </div>
        </div>
      </div>
      <div className="py-3 text-center">
        <h3 className="h6 mb-1">
          <Link
            href={
              product.category
                ? `/${product.category[1]}/${product.slug}`
                : product.link
            }
          >
            <a className="text-dark">{product.name}</a>
          </Link>
        </h3>
        <div className="d-flex align-items-center justify-content-center">
          <p className="product-price text-muted mb-0">
            <s className="me-2 text-gray-500">${product.price}.00</s>
            {/* Only for DEMO purposes - change on production */}
            <span>$20.00</span>
          </p>
          {product.img.category.length > 1 && (
            <Colors
              options={product.img.category}
              id={product.slug}
              setSelectedImage={setSelectedImage}
              className="ms-2"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default CardProduct7
