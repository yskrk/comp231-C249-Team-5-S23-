import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import NewArrivals from "../components/NewArrivals"
import Swiper from "../components/Swiper"

import data from "../data/index2.json"
import products from "../data/products-clothes.json"
import SummerSales from "../components/SalesSummer"
import Link from "next/link"
import Image from "../components/Image"
export async function getStaticProps() {
  return {
    props: {
      header: {
        absolute: true,
        transparentBar: true,
        transparentNavbar: true,
      },
      title: "Homepage",
    },
  }
}

const Index2 = () => {
  return (
    <React.Fragment>
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
        navigation
        pagination={false}
        style={{ height: "80vh", minHeight: "600px" }}
        priority
      />
      {data.maincategories && (
        <Container className="py-6">
          <Row>
            {data.maincategories.map((category, index) => (
              <Col
                key={category.name}
                xs="6"
                lg={[1, 2, 5].indexOf(index) > -1 ? 5 : 7}
                className={`mb-2 ${index % 2 === 1 ? "ps-1" : "pe-1"}`}
              >
                <div
                  className="banner"
                  style={{ backgroundColor: category.background }}
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
            ))}
          </Row>
        </Container>
      )}
      <NewArrivals
        className="py-6"
        backgroundImage="/img/photo/deal-plain.jpg"
        headCenter
        products={products}
      />
      <SummerSales />
    </React.Fragment>
  )
}

export default Index2
