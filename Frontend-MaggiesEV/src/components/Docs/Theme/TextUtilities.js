import React from "react"

import { Card } from "react-bootstrap"

const TextUtilities = () => {
  return (
    <div id="textutilities" className="docs-item element">
      <h5 className="text-uppercase mb-4">Text utilities</h5>
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
              <code>.text-gray-100</code> to <code>.text-gray-900</code> -
              grayscale text colours
            </Card.Text>
            <Card.Text>
              <code>.text-sm</code>, <code>.text-lg</code>,{" "}
              <code>.text-xl</code> - text sizes
            </Card.Text>
            <Card.Text>
              <code>.letter-spacing-1</code> to <code>.letter-spacing-5</code> -
              letter spacing 0.1em to 0.5em
            </Card.Text>
            <Card.Text>
              <code>.z-index-1</code> to <code>.z-index-5</code> - z-index from
              10 to 50
            </Card.Text>
            <Card.Text>
              <code>.text-hover-primary</code>, etc. - text colour on
              hover/focus for theme colours
            </Card.Text>
            <Card.Text>
              <code>.overflow-visible</code> and <code>.overflow-hidden</code> -
              overflow control
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default TextUtilities
