import React from "react"

import { Card } from "react-bootstrap"

const BackgroundImage = () => {
  return (
    <div id="backgroundimage" className="docs-item element">
      <h5 className="text-uppercase mb-4">Background image</h5>
      <div className="docs-desc">
        <p className="lead">
          Utility class that turns a{" "}
          <code>&lt;img className="bg-image"&gt;</code> into a background image
          for its background. Useful e.g. for carousels. Make sure that image's
          parent container and the content that should be placed over the image
          are relatively positioned.
        </p>
      </div>
      <div className="mt-5">
        <Card className="border-0 position-relative py-6 overflow-hidden shadow">
          <img
            src="/img/blog/photo-1534126511673-b6899657816a.jpg"
            alt=""
            className="bg-image"
          />
          <Card.Body className="text-center position-relative">
            <h3 className="text-white text-uppercase mb-0">
              I have a background image
            </h3>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default BackgroundImage
