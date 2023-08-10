import React, { useEffect, useState } from "react"

import { Container } from "react-bootstrap"
import { Pagination } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import data from "../data/brands-logos.json"
import Image from "./Image"

// swiper core styles
import "swiper/css"

// modules styles
import "swiper/css/pagination"

const Brands = (props) => {
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const params = {
    className: `brands-slider pb-5`,
    modules: [Pagination],
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    roundLengths: true,
    pagination: {
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
    },
  }

  return (
    <section className={props.className ? props.className : ""}>
      <Container>
        {domLoaded && (
          <Swiper {...params}>
            {data.map((brand, index) => (
              <SwiperSlide
                key={index}
                className="h-auto d-flex align-items-center justify-content-center"
              >
                <Image
                  src={brand.img}
                  alt={brand.title}
                  className="img-fluid w-6rem opacity-7"
                  width={96}
                  height={96}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </section>
  )
}

export default Brands
