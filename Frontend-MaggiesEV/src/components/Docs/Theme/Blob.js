import React from "react"
import { Col, Row } from "react-bootstrap"
import Icon from "../../Icon"

const Blob = () => {
  return (
    <div id="blob" className="docs-item element">
      <h5 className="text-uppercase mb-4">Blob</h5>
      <div className="docs-desc">
        <p>
          In the design variants of the homepage, I use colourful SVG blobs. At
          the moment, I have included four types into a SVG sprite, if you would
          need more, just get in touch. The usage is simple - to insert a basic
          blob, use syntax{" "}
          <code>
            &lt;Icon className=&quot;svg-blob&quot;
            icon=&quot;blob-shape-4&quot;&gt;
          </code>
        </p>
        <p>
          If you'd add <code>className="svg-blob-fill-current"</code> to the
          Icon component, it will inherit also a fill colour from its parent.
        </p>
      </div>
      <div className="mt-5">
        <Row>
          <Col sm="6" lg="3">
            <Icon
              icon="blob-shape"
              className="svg-blob position-static svg-blob-fill-current"
              style={{ maxWidth: "100%", height: "400px", color: "#FFB4BC" }}
            />
          </Col>
          <Col sm="6" lg="3">
            <Icon
              icon="blob-shape-2"
              className="svg-blob position-static"
              style={{ maxWidth: "100%", height: "400px", color: "#8ed1fc" }}
            />
          </Col>
          <Col sm="6" lg="3">
            <Icon
              icon="blob-shape-3"
              className="svg-blob position-static svg-blob-fill-current text-primary"
              style={{ maxWidth: "100%", height: "400px" }}
            />
          </Col>
          <Col sm="6" lg="3">
            <Icon
              icon="blob-shape-4"
              className="svg-blob position-static svg-blob-fill-current"
              style={{ maxWidth: "100%", height: "400px", color: "#c4e0f3" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Blob
