import React from "react"

import { Container, Row, Col, Button } from "react-bootstrap"

import products from "../data/products-home.json"

import NewArrivals from "../components/NewArrivals"
import Swiper from "../components/Swiper"

import data from "../data/index3.json"
import Sale from "../components/Sale"
import Icon from "../components/Icon"
import SummerSales from "../components/SalesSummer"
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

const Index3 = () => {
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
      {data.featuredproducts && (
        <div className="py-6">
          <Container>
            <Row>
              <Col xl="8" className="mb-5">
                <p className="text-uppercase text-muted fw-bold mb-1">
                  Top choices
                </p>
                <h3>Popular this week</h3>
                <p className="lead text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
            <Row>
              {data.featuredproducts.map((product, index) => {
                let md
                let productClass
                let contentClass
                switch (index) {
                  case 0:
                    md = 4
                    productClass = "ms-auto mb-4 mb-lg-5"
                    contentClass = "px-4 position-relative z-index-2 mt-3"
                    break
                  case 1:
                    md = 7
                    productClass = "ms-auto mb-4 mb-lg-5"
                    contentClass = "position-absolute z-index-10 py-6"
                    break
                  case 2:
                    md = 4
                    productClass = "ms-auto pt-lg-6 mb-4 mb-lg-5 order-md-2"
                    contentClass = "px-4 position-relative z-index-2 mt-3"
                    break
                  case 3:
                    md = 7
                    productClass = "mb-4 mb-lg-5 order-md-1"
                    contentClass = "position-absolute z-index-10 py-6"
                    break
                  case 4:
                    md = 3
                    productClass = "pt-md-3 mb-4 mb-lg-5 order-md-3"
                    contentClass = "px-4 position-relative z-index-2 mt-3"
                    break
                  default:
                    md = 8
                    productClass = "ms-auto order-md-3"
                    contentClass = "position-absolute z-index-10 py-6"
                }

                return (
                  <Col
                    key={product.name}
                    md={md}
                    className={`hover-scale ${
                      productClass ? productClass : ""
                    }`}
                  >
                    {index % 2 === 1 ? (
                      <React.Fragment>
                        <div className={contentClass ? contentClass : ""}>
                          <Link href={product.link}>
                            <a className="text-dark text-decoration-none">
                              <h3 style={{ wordSpacing: "100vw" }}>
                                {product.name}
                              </h3>
                              <p className="text-muted">{product.price}</p>
                            </a>
                          </Link>
                          <p>
                            <Link href={product.link} passHref>
                              <Button
                                variant="link"
                                className="text-dark text-decoration-none px-0"
                              >
                                Shop now
                              </Button>
                            </Link>
                          </p>
                        </div>
                        <div className="ms-6">
                          <Link href={product.link}>
                            <a>
                              <Image
                                className="img-fluid"
                                src={product.img}
                                alt=""
                                width={644}
                                height={644}
                              />
                            </a>
                          </Link>
                        </div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Link href={product.link}>
                          <a>
                            <Image
                              className="img-fluid"
                              src={product.img}
                              alt=""
                              width={410}
                              height={410}
                            />
                          </a>
                        </Link>
                        <div className={contentClass ? contentClass : ""}>
                          <a
                            className="text-dark text-decoration-none"
                            href="detail-2.html"
                          >
                            <h3 style={{ wordSpacing: "100vw" }}>
                              {product.name}
                            </h3>
                            <p className="text-muted">{product.price}</p>
                          </a>
                          <p>
                            <Button
                              variant="link"
                              className="text-dark text-decoration-none px-0"
                              href={product.link}
                            >
                              Shop now
                            </Button>
                          </p>
                        </div>
                      </React.Fragment>
                    )}
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      )}
      <Sale
        className="py-5 position-relative"
        backgroundColor="#ebf7ff"
        blobColor="#c4e0f3"
        image="/img/product/chair2-transparent.png"
      />
      <NewArrivals products={products} />
      <SummerSales
        image="/img/product/chair-transparent.png"
        background="#eae0bd"
      />
    </React.Fragment>
  )
}

export default Index3
