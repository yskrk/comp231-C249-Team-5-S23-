import React, { useEffect, useState } from "react"

import { Container } from "react-bootstrap"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import products from "../data/products-clothes.json"
import CardProduct from "./CardProduct"
// swiper core styles
import "swiper/css"

// modules styles
import "swiper/css/pagination"
const ProductBottomProducts = ({ className }) => {
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const params = {
    spaceBetween: 15,
    slidesPerView: 2,
    modules: [Pagination],
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      1150: {
        slidesPerView: 4,
      },
    },
    loop: true,
    pagination: {
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
  }
  return (
    <section className={`py-5 ${className ? className : ""}`}>
      <Container>
        <h5 className="mb-4">You might also like these</h5>
        <div className="position-relative">
          {domLoaded && (
            <Swiper {...params}>
              {products.map((product, index) => (
                <SwiperSlide key={index} className="pb-5">
                  <CardProduct product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </Container>
    </section>
  )
}

export default ProductBottomProducts
