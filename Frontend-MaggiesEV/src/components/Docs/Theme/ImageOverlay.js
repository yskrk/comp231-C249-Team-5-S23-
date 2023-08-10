import React from "react"

import { Card, Row, Col } from "react-bootstrap"

const ImageOverlay = () => {
  return (
    <div id="imageoverlay" className="docs-item element">
      <h5 className="text-uppercase mb-4">Image overlay</h5>
      <div className="docs-desc">
        <p className="lead">
          Utility class that darkens or lightens the backround image of the
          element to enhance the legibility. It can be used with cards, carousel
          slides, etc. Now with responsive behaviour too.
        </p>
      </div>
      <div className="mt-5">
        <Row>
          <Col lg="6">
            <Card className="mb-5 border-0 text-white dark-overlay">
              <img
                src="/img/blog/ian-dooley-347962-unsplash.jpg"
                alt=""
                className="card-img"
              />
              <a href="/category-full" className="tile-link" />
              <div className="card-img-overlay d-flex align-items-center">
                <div className="text-center w-100 overlay-content">
                  <h2 className="display-4 fw-bold text-uppercase text-center mb-0">
                    Ladies{" "}
                  </h2>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="mb-5 border-0 text-center light-overlay">
              <img
                src="/img/blog/ian-dooley-347962-unsplash.jpg"
                alt=""
                className="card-img"
              />
              <a href="/category-full" className="tile-link" />
              <div className="card-img-overlay d-flex align-items-center">
                <div className="text-center w-100 overlay-content">
                  <h2 className="display-4 fw-bold text-uppercase text-center mb-0">
                    Ladies{" "}
                  </h2>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Card className="bg-gray-100 border-0">
          <Card.Body>
            <h6 className="text-muted text-uppercase fw-normal mb-3">
              Class reference
            </h6>
            <Card.Text>
              <code>.dark-overlay</code> or <code>.light-overlay</code> - CSS
              class to be used on the element, accepts Boostrap responsive
              suffixes. (e.g. <code>.dark-overlay.dark-overlay-lg-0</code>{" "}
              creates overlay on smaller viewports and hides it on lg+ screens.)
            </Card.Text>
            <Card.Text>
              <code>.overlay-content</code> - use this class on the element's
              content to increase its Z-index and move it above the overlay
              layer
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ImageOverlay
