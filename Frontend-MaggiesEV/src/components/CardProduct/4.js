import React, { useState } from "react"
import Link from "next/link"

import { Button, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap"

import Icon from "../Icon"

import Image from "../Image"
import Colors from "./Colors"

const CardProduct4 = ({
  product,
  addToCart,
  addToWishlist,
  setQuickView,
  quickView,
}) => {
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <div
      className={`product product-type-4`}
      data-aos="zoom-in"
      data-aos-delay="0"
    >
      <div className="product-image border-0">
        {product.new && (
          <div className="product-label-boxed py-1 rounded-pill small fw-normal bg-white text-dark">
            Fresh
          </div>
        )}
        {product.sale && (
          <div className="product-label-boxed py-1 rounded-pill small fw-normal bg-primary text-light">
            Sale
          </div>
        )}
        {product.soldout && (
          <div className="product-label-boxed py-1 rounded-pill small fw-normal bg-dark text-light">
            Sold out
          </div>
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
          <div className="product-hover-overlay-buttons">
            <ButtonGroup className="shadow">
              <Button
                variant="light"
                size="lg"
                className="bg-white p-0 border-0"
                href="#!"
                onClick={(e) => {
                  e.preventDefault()
                  setQuickView(!quickView)
                }}
                aria-label="open quickview"
              >
                <OverlayTrigger
                  className="d-block p-3"
                  overlay={<Tooltip>Quick view</Tooltip>}
                >
                  <span className="d-block p-3">
                    <Icon className="svg-icon-md" icon="expand-1" />
                  </span>
                </OverlayTrigger>
              </Button>
              <Button
                variant="light"
                size="lg"
                className="bg-white p-0 border-0"
                href="#!"
              >
                <OverlayTrigger overlay={<Tooltip>Compare</Tooltip>}>
                  <span className="d-block p-3">
                    <Icon className="svg-icon-md" icon="stack-1" />
                  </span>
                </OverlayTrigger>
              </Button>
              <Button
                variant="light"
                size="lg"
                className="bg-white p-0 border-0"
                href="#!"
                onClick={(e) => addToWishlist(e, product)}
                aria-label="add to wishlist"
              >
                <OverlayTrigger overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                  <span className="d-block p-3">
                    <Icon className="svg-icon-md" icon="heart-1" />
                  </span>
                </OverlayTrigger>
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className="py-3">
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
        <div className="d-flex align-items-center justify-content-between">
          <div className="product-info-action">
            <p className="product-price d-flex align-items-center text-muted mb-0">
              <s className="me-2 text-gray-500">${product.price}.00</s>
              {/* Only for DEMO purposes - change on production */}
              <span>$20.00</span>
            </p>
            <Button
              variant="link"
              className="product-link"
              href="#!"
              onClick={(e) => addToCart(e, product)}
              aria-label="add to cart"
            >
              <Icon className="me-2 svg-icon-sm svg-icon-heavy" icon="cart-1" />
              {product.img.category.length > 1
                ? "Select options"
                : "Add to cart"}
            </Button>
          </div>
          {product.img.category.length > 1 && (
            <Colors
              options={product.img.category}
              id={product.slug}
              setSelectedImage={setSelectedImage}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default CardProduct4
