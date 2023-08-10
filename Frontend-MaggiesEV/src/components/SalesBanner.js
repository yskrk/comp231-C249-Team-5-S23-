import React from "react"
import { Container, Button } from "react-bootstrap"
import Icon from "./Icon"
import Image from "./Image"

const SalesBanner = (props) => {
  return (
    <div
      className={`position-relative py-6 overflow-hidden`}
      style={{ backgroundColor: "#fdf7e5" }}
      data-aos="flip-up"
    >
      <Icon
        icon="blob-shape-4"
        className="svg-blob svg-blob-fill-current"
        style={{ right: "0", top: "0", color: "#ded3ae" }}
      />
      <Container>
        <div
          style={{ right: "5%", top: 0, zIndex: 5 }}
          className="position-absolute d-none d-sm-block"
        >
          <Image
            src="/img/product/lamps-transparent.png"
            width={500}
            height={328}
            alt=""
          />
        </div>
        <div className="position-relative z-index-10">
          <p className="subtitle mb-3" style={{ color: "#846707" }}>
            Widest choice{" "}
          </p>
          <h4 className="h1 mb-3">Lights on sale</h4>
          <h5 className="h2 fw-light mb-5">
            Our biggest sales this year &mdash; up to 60% off!
          </h5>
          <Button variant="outline-dark" href="#">
            Start shopping
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default SalesBanner
