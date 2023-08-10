import React from "react"
import InnerImageZoom from "react-inner-image-zoom"
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Col, Row } from "react-bootstrap"
import dummyProduct from "../../../data/dummyproduct.json"

const ReactInnerImageZoom = () => {
  return (
    <div id="reactinnerzoom" className="docs-item element">
      <h5 className="text-uppercase mb-4">React Inner Image Zoom</h5>
      <div className="docs-desc">
        <p className="lead">
          React plugin to enlarge images on touch, click, or mouseover. For a
          complete reference, see{" "}
          <a href="https://github.com/laurenashpole/react-inner-image-zoom">
            React Inner Image Zoom's docs
          </a>
          .
        </p>
      </div>
      <Row className="mt-5">
        <Col md="6">
          <InnerImageZoom
            hideHint
            src={dummyProduct.img.detail[0].img}
            zoomSrc={dummyProduct.img.detail[0].img}
            alt={dummyProduct.img.detail[0].alt}
            zoomType="hover"
            className="cursor-pointer"
          />
        </Col>
      </Row>
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

export default ReactInnerImageZoom

const highlightCode = `
import InnerImageZoom from "react-inner-image-zoom"
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css"

const Component = () => {
    return (
        <InnerImageZoom
            hideHint
            src="/image/src"
            zoomSrc="/image/src"
            alt="image"
            zoomType="hover"
            className="cursor-pointer"
        />
    )
}

export default Component
`
