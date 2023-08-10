import React from "react"
import dummyProduct from "../../../data/dummyproduct.json"
import { Col, Row } from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"
import CardProduct from "../../CardProduct"
import products from "../../../data/products-clothes.json"
export default function Product() {
  return (
    <div id="product" className="docs-item element">
      <h5 className="text-uppercase mb-4">Product</h5>
      <div className="docs-desc">
        <p className="lead">
          Product component used in the product listing. Contains animated
          buttons appearing after hovering above the component.
        </p>
      </div>
      <div className="mt-5">
        <h5 className="mb-4">Default Product Card</h5>
        <Row>
          {products.slice(0, 2).map((product, index) => (
            <Col lg={4} sm={6} key={index}>
              <CardProduct product={product} />
            </Col>
          ))}
        </Row>
        <h5 className="mb-4">Product Card 1</h5>
        <Row>
          {products.slice(2, 4).map((product, index) => (
            <Col lg={4} sm={6} key={index}>
              <CardProduct product={product} cardType={1} />
            </Col>
          ))}
        </Row>
        <h5 className="mb-4">Product Card 2</h5>
        <Row>
          {products.slice(4, 6).map((product, index) => (
            <Col lg={4} sm={6} key={index}>
              <CardProduct product={product} cardType={2} />
            </Col>
          ))}
        </Row>
        <h5 className="mb-4">Product Card 3</h5>
        <Row>
          {products.slice(6, 8).map((product, index) => (
            <Col lg={4} sm={6} key={index}>
              <CardProduct product={product} cardType={3} />
            </Col>
          ))}
        </Row>
        <h5 className="mb-4">Product Card 4</h5>
        <Row>
          {products.slice(8, 10).map((product, index) => (
            <Col lg={4} sm={6} key={index}>
              <CardProduct product={product} cardType={4} />
            </Col>
          ))}
        </Row>
        <h5 className="mb-4">Product Card 5</h5>
        <Row>
          {products.slice(10, 12).map((product, index) => (
            <Col lg={4} sm={6} key={index}>
              <CardProduct product={product} cardType={5} />
            </Col>
          ))}
        </Row>
        <h5 className="mb-4">Product Card 6</h5>
        <Row>
          {products.slice(0, 2).map((product, index) => (
            <Col lg={4} sm={6} key={index}>
              <CardProduct product={product} cardType={6} />
            </Col>
          ))}
        </Row>
        <h5 className="mb-4">Product Card 7</h5>
        <Row>
          {products.slice(2, 4).map((product, index) => (
            <Col lg={4} sm={6} key={index}>
              <CardProduct product={product} cardType={7} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="mt-5">
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          className="rounded shadow p-4"
        >
          {highlightCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

const highlightCode = `import CardProduct from '../../CardProduct'
import { Row, Col } from "react-bootstrap"

const Component = () => {
    return (
        <Row>
          {products.map((product) => (
            <Col lg={4} sm={6} key={product.id}>
                // No cardType = default
                <CardProduct product={product} cardType={6} />
            </Col>
          ))}
        </Row>
    )
}

export default Component
`
