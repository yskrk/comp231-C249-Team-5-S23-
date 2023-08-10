import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from "swiper"
import Icon from "./Icon"
import Image from "./Image"

const SwiperComponent = (props) => {
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const breakpoints = []
  if (props.sm) {
    breakpoints[565] = {
      slidesPerView: props.sm,
    }
  }
  if (props.md) {
    breakpoints[768] = {
      slidesPerView: props.md,
    }
  }
  if (props.lg) {
    breakpoints[991] = {
      slidesPerView: props.lg,
    }
  }
  if (props.xl) {
    breakpoints[1200] = {
      slidesPerView: props.xl,
    }
  }
  if (props.xxl) {
    breakpoints[1400] = {
      slidesPerView: props.xxl,
    }
  }
  if (props.xxxl) {
    breakpoints[1600] = {
      slidesPerView: props.xxxl,
    }
  }
  const params = {
    className: props.className,
    modules: [Navigation, Pagination, Autoplay, EffectFade, Parallax],
    slidesPerView: props.perView ? props.perView : 1,
    effect: props.effect,
    allowTouchMove: props.allowTouchMove === false ? false : true,
    spaceBetween: props.spaceBetween ? props.spaceBetween : 0,
    centeredSlides: props.centeredSlides,
    roundLengths: props.roundLengths,
    loop: props.loop,
    speed: props.speed ? props.speed : 400,
    parallax: props.parallax,
    breakpoints: breakpoints,
    autoplay: props.autoplay,
    pagination: props.pagination !== undefined && {
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: props.navigation !== undefined && {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  }
  return props.data
    ? domLoaded && (
        <Swiper {...params}>
          {props.data.map((slide, index) => (
            <SwiperSlide
              key={index}
              style={{
                ...props.style,
              }}
            >
              {!props.columns && (
                <Image
                  src={slide.img}
                  layout="fill"
                  className="bg-image"
                  alt="Hero image"
                  priority={props.priority && index === 0}
                  objectPosition={slide.bgdirection}
                />
              )}
              <Container
                fluid={!props.columns}
                className={`h-100 ${!props.columns ? "px-lg-6" : ""} ${
                  props.containerclass ? props.containerclass : ""
                } position-relative`}
              >
                <Row
                  className={`h-100 align-items-center ${
                    slide.rowclass ? slide.rowclass : ""
                  }`}
                  data-swiper-parallax="-500"
                >
                  {props.columns ? (
                    <React.Fragment>
                      <Col
                        sm={6}
                        className={slide.contentclass ? slide.contentclass : ""}
                      >
                        {slide.subtitle && (
                          <p
                            className={`subtitle letter-spacing-3 fw-light ${
                              slide.subtitleclass ? slide.subtitleclass : ""
                            }`}
                          >
                            {slide.subtitle}
                          </p>
                        )}
                        <h2
                          className={slide.titleclass ? slide.titleclass : ""}
                          style={{ lineHeight: "1" }}
                        >
                          {slide.name}
                        </h2>
                        {slide.text && (
                          <p className="text-muted mb-5">{slide.text}</p>
                        )}
                        <Button variant="outline-primary" href={slide.link}>
                          {slide.button}
                        </Button>
                      </Col>
                      <Col sm={6} className="text-start text-sm-center">
                        <div data-swiper-parallax="-200">
                          <Image
                            className="img-fluid home-slider-image"
                            src={slide.img}
                            alt=""
                            width={333}
                            height={500}
                          />
                        </div>
                        <Icon
                          icon="blob-shape-3"
                          className="svg-blob d-none d-md-inline-block svg-blob-fill-current svg-blob-swiper"
                          style={{ color: slide.color }}
                        />
                      </Col>
                    </React.Fragment>
                  ) : (
                    <Col
                      lg={{ span: 6, offset: slide.contentoffset }}
                      className={slide.contentclass ? slide.contentclass : ""}
                    >
                      {slide.subtitle && (
                        <p
                          className={`subtitle letter-spacing-3 fw-light ${
                            slide.subtitleclass ? slide.subtitleclass : ""
                          }`}
                        >
                          {slide.subtitle}
                        </p>
                      )}
                      <h2
                        className={slide.titleclass ? slide.titleclass : ""}
                        style={{ lineHeight: "1" }}
                      >
                        {slide.name}
                      </h2>
                      {slide.text && (
                        <p className="text-muted mb-5">{slide.text}</p>
                      )}
                      <Button variant="dark" href={slide.link}>
                        {slide.button}
                      </Button>
                    </Col>
                  )}
                </Row>
              </Container>
            </SwiperSlide>
          ))}
          <div
            className={`swiper-nav d-none ${
              props.navigation !== undefined ? "d-lg-block" : ""
            }`}
          >
            <div
              className="swiper-button-prev"
              role="button"
              aria-label="Previous slide"
            />
            <div
              className="swiper-button-next"
              role="button"
              aria-label="Next slide"
            />
          </div>
        </Swiper>
      )
    : "loading"
}

export default SwiperComponent
