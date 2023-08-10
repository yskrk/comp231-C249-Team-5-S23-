import React, { useState } from "react"
import Link from "next/link"

import { Button } from "react-bootstrap"

import Icon from "../Icon"

import Image from "../Image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import Colors from "./Colors"

const CardProduct6 = ({
  product,
  addToCart,
  addToWishlist,
  setQuickView,
  quickView,
}) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const params = {
    loop: true,
    modules: [Navigation],
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  }
  return (
    <div
      className={`product product-type-6`}
      data-aos="zoom-in"
      data-aos-delay="0"
    >
      <div className="product-image border-0">
        {product.new && (
          <div className="product-label-boxed bg-info">Fresh</div>
        )}
        {product.sale && (
          <div className="product-label-boxed bg-primary">Sale</div>
        )}
        {product.soldout && (
          <div className="product-label-boxed bg-danger">Sold out</div>
        )}
        <div className="product-img-holder position-relative">
          {product.img.category.length > 1 ? (
            <Swiper className="product-slider" {...params}>
              {product.img.category.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={
                      product.category
                        ? `/${product.category[1]}/${product.slug}`
                        : product.link
                    }
                  >
                    <a>
                      <Image
                        src={slide.img}
                        layout="responsive"
                        width={408}
                        height={523}
                        alt={slide.alt}
                      />
                    </a>
                  </Link>
                </SwiperSlide>
              ))}
              <div className="swiper-nav">
                <div
                  className="swiper-button-prev"
                  tabIndex="0"
                  role="button"
                  aria-label="Previous slide"
                />
                <div
                  className="swiper-button-next"
                  tabIndex="0"
                  role="button"
                  aria-label="Next slide"
                />
              </div>
            </Swiper>
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
        </div>
        {product.img.category.length > 1 && (
          <Colors
            options={product.img.category}
            id={product.slug}
            disabled
            setSelectedImage={setSelectedImage}
            className="position-absolute bottom-0 end-0 p-3 z-index-20"
          />
        )}
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
        <div className="product-info-action">
          <p className="product-price d-flex align-items-center justify-content-center text-muted mb-0">
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
            {product.img.category.length > 1 ? "Select options" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct6
