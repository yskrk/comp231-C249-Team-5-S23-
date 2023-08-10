import React from "react"

import { Row, Col } from "react-bootstrap"
import Icon from "../../Icon"

const IconsEcommerce = () => {
  const icons = [
    "checkout-cart-1",
    "basket-1",
    "paper-bag-1",
    "map-marker-1",
    "smartphone-1",
    "dollar-sign-1",
    "open-box-1",
    "on-sale-sticker-1",
    "pay-1",
    "giftbox-1",
    "store-1",
    "pay-by-card-1",
  ]
  return (
    <div id="icons-ecommerce" className="docs-item">
      <h5 className="text-uppercase mb-4">Icons - E-commerce</h5>
      <div className="docs-desc">
        <p className="lead">
          This theme also comes with a{" "}
          <strong>70+ Premium E-commerce SVG icons</strong>
        </p>
        <p className="text-muted text-large">
          For a complete icon reference, see{" "}
          <a href="https://demo.bootstrapious.com/varkala/1-2/icons/demo.html">
            here
          </a>
          .
        </p>
      </div>
      <div className="mt-5">
        <Row>
          {icons.map((iconItem) => (
            <Col
              key={iconItem}
              xs="3"
              md="2"
              className="d-flex justify-content-center"
            >
              <Icon
                icon={iconItem}
                className="w-3rem h-3rem mb-5 svg-icon-light text-dark"
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default IconsEcommerce
