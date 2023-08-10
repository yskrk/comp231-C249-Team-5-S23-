import React from "react"

import { Card } from "react-bootstrap"

const BlockUtilities = () => {
  return (
    <div id="blockutilities" className="docs-item element">
      <h5 className="text-uppercase mb-4">Block utilities</h5>
      <div className="docs-desc">
        <p className="lead">
          Additional utility classes, for block elements mostly.
        </p>
      </div>
      <div className="mt-5">
        <Card className="bg-gray-100 border-0">
          <Card.Body>
            <h6 className="text-muted text-uppercase fw-normal mb-3">
              Class reference
            </h6>
            <Card.Text>
              <code>.bg-gray-100</code> to <code>.bg-gray-900</code> - grayscale
              backgrounds
            </Card.Text>
            <Card.Text>
              <code>.bg-primary-light</code>, <code>.bg-secondary-light</code> -
              lighter backgrounds for the theme colours
            </Card.Text>
            <Card.Text>
              <code>.opacity-1</code> to <code>.opacity-9</code> - opacity
              helper
            </Card.Text>
            <Card.Text>
              <code>.hover-scale</code> - scale element on hover
            </Card.Text>
            <Card.Text>
              <code>.hover-animate</code> - move element up by few pixels on
              hover
            </Card.Text>
            <Card.Text>
              <code>.hover-scale-bg-image</code> - scale element's background
              picture on hover
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default BlockUtilities
