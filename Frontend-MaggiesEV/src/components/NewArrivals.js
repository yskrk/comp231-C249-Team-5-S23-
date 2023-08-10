import React from "react"

import { Container, Row, Col, Button } from "react-bootstrap"

import Icon from "./Icon"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import CardProduct from "./CardProduct"

const NewArrivals = (props) => {
  const products = props.products

  return (
    <div
      className={`py-6 ${
        props.masonry ? "position-relative overflow-hidden" : ""
      }`}
    >
      <Container
        fluid={props.fluid}
        className={props.fluid ? "container-fluid-px" : ""}
      >
        {props.blob1 && (
          <Icon
            icon={props.blob1}
            className="svg-blob svg-blob-fill-current d-none d-md-block"
            style={{ left: "-200px", top: "400px", color: props.blob1Color }}
          />
        )}
        {props.blob2 && (
          <Icon
            icon={props.blob2}
            className="svg-blob svg-blob-fill-current d-none d-md-block"
            style={{ right: "-200px", top: "600px", color: props.blob2Color }}
          />
        )}
        {props.fluid ? (
          <Row>
            <Col lg="10" xl="8" className="text-center mx-auto">
              <h2 className="display-3 mb-5">New Arrivals</h2>
              <p className="lead text-muted mb-6">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections
              </p>
            </Col>
          </Row>
        ) : (
          <div className={props.headCenter ? "text-center" : ""}>
            <h2
              className={props.masonry ? "display-2 fw-bold mb-5" : ""}
              style={{ color: props.masonry && "#efb2af" }}
            >
              New Arrivals
            </h2>
            {!props.masonry && (
              <p className="lead text-muted mb-5">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections
              </p>
            )}
          </div>
        )}

        <Row className="justify-content-between align-items-center mb-4">
          <Col xs="12" sm={props.fluid} md={!props.fluid}>
            <ul
              className={`list-inline text-center text-sm-start mb-3 ${
                props.fluid ? "mb-sm-0" : "mb-md-0"
              }`}
            >
              <li className="list-inline-item">
                <a className="text-dark" href="#">
                  All Products{" "}
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted text-hover-dark" href="#">
                  Clothing{" "}
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted text-hover-dark" href="#">
                  Bags
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted text-hover-dark" href="#">
                  Shoes
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted text-hover-dark" href="#">
                  Accessories
                </a>
              </li>
            </ul>
          </Col>
          <Col
            xs="12"
            sm={props.fluid && "auto"}
            md={!props.fluid && "auto"}
            className="text-center"
          >
            <Button variant="link" className="px-0" href="#">
              All products
            </Button>
          </Col>
        </Row>
        {props.masonry ? (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3, 1000: 4 }}
          >
            <Masonry className="row">
              {products.map((product, index) => (
                <Col key={index} className="item">
                  <CardProduct
                    product={product}
                    showQuickView={props.showQuickView}
                  />
                </Col>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <Row>
            {products.map((product, index) =>
              props.fluid ? (
                <Col key={index} xl={2} lg={3} md={4} xs={6}>
                  <CardProduct product={product} />
                </Col>
              ) : (
                index < 8 && (
                  <Col key={index} xl={3} lg={3} md={4} xs={6}>
                    <CardProduct key={index} product={product} />
                  </Col>
                )
              )
            )}
          </Row>
        )}
      </Container>
    </div>
  )
}

export default NewArrivals
