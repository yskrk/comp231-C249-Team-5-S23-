import React from "react"
import { Container, Button } from "react-bootstrap"
import Icon from "./Icon"
import Image from "./Image"

const SalesSummer = (props) => {
  const content = (
    <React.Fragment>
      <h4 className={`mb-3 ${props.image ? "display-3 fw-bold" : "h1"}`}>
        Summer Sales
      </h4>
      <h5 className="h2 fw-light mb-5">
        Our biggest sales this year &mdash; up to 60% off!
      </h5>
      {!props.image && (
        <p className="h5 text-muted mb-5">
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment!
        </p>
      )}
      <Button variant={props.image ? "outline-dark" : "dark"} href="#">
        Start shopping
      </Button>
    </React.Fragment>
  )

  return (
    <Container className={props.image ? "mb-5" : "py-6 text-center"}>
      {props.image ? (
        <div
          className="position-relative text-center"
          style={{ background: props.background }}
        >
          <div className="position-absolute w-100 h-100 overflow-hidden">
            <Icon
              icon="blob-shape"
              className="svg-blob svg-blob-fill-current text-primary"
              style={{
                width: "400px",
                height: "400px",
                maxWidth: "100%",
                left: "-200px",
                top: "-50px",
              }}
            />
          </div>
          <div className="py-6 px-4">
            <div
              className="position-absolute d-none d-md-block"
              style={{ right: 0, top: "-50px", maxHeight: "100%", zIndex: 5 }}
            >
              <Image
                width={237}
                height={410}
                src="/img/product/chair-transparent.png"
                alt=""
              />
            </div>
            <div className="position-relative z-index-10">{content}</div>
          </div>
        </div>
      ) : (
        content
      )}
    </Container>
  )
}

export default SalesSummer
