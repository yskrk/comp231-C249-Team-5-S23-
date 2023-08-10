import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import products from "../data/products-home-masonry.json"

import NewArrivals from "../components/NewArrivals"
import Swiper from "../components/Swiper"

import data from "../data/index4.json"
import Icon from "../components/Icon"
import SummerSales2 from "../components/SalesSummer2"
import SalesBanner from "../components/SalesBanner"
import Link from "next/link"
import Image from "../components/Image"

export async function getStaticProps() {
  return {
    props: {
      title: "Homepage",
      header: {
        transparentNavbar: true,
      },
    },
  }
}

const Index4 = () => {
  return (
    <React.Fragment>
      <Icon
        icon="blob-shape"
        className="svg-blob svg-blob-fill-current"
        style={{
          width: "800px",
          height: "800px",
          maxWidth: "100%",
          left: "-200px",
          top: "-200px",
          color: "#e0d4ab",
        }}
      />
      <Swiper
        data={data.swiper}
        autoplay
        delay={5000}
        loop
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        speed={1500}
        parallax
        columns
        style={{ height: "50vh", minHeight: "500px" }}
      />
      {data.featuredcategories && (
        <Container className="py-6 overflow-hidden">
          <Row>
            {data.featuredcategories.map((category, index) => {
              let lg
              switch (index) {
                case 0:
                  lg = 7
                  break
                case 1:
                  lg = 5
                  break
                case 2:
                  lg = 5
                  break
                default:
                  lg = 7
              }

              return (
                <Col
                  key={category.name}
                  xs="6"
                  lg={lg}
                  className={`mb-2 ${index % 2 === 1 ? "ps-1" : "pe-1"}`}
                >
                  <div
                    className="banner"
                    style={{ backgroundColor: category.color }}
                    data-aos="zoom-in"
                  >
                    <div className="banner-text p-3 p-lg-5">
                      <p
                        className="subtitle text-sm"
                        style={{ color: category.subtitlecolor }}
                      >
                        {category.subtitle}
                      </p>
                      <h2 className="mb-0">{category.name}</h2>
                    </div>
                    <div className="banner-bg" style={{ height: "70%" }}>
                      <Image
                        className="img-fluid"
                        src={category.img}
                        alt={category.name}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom"
                      />
                    </div>
                    <Link href={category.link}>
                      <a className="stretched-link banner-link">
                        <span className="sr-only">{category.button}</span>
                      </a>
                    </Link>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      )}
      <SalesBanner />
      <NewArrivals
        products={products}
        masonry
        blob1="blob-shape-2"
        blob1Color="#ffdbd9"
        blob2="blob-shape-3"
        blob2Color="#e7eaf9"
      />
      <SummerSales2 />
    </React.Fragment>
  )
}

export default Index4
