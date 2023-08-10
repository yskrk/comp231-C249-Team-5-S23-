import React from "react"

import { Button, Form, Row, Col, Badge } from "react-bootstrap"

const ReviewForm = () => {
  return (
    <div className="py-5 px-3">
      <h5 className="mb-4">Leave a review</h5>
      <Form className="mb-4 form">
        <Row>
          <Col sm="6">
            <div className="mb-4">
              <Form.Label htmlFor="name">Your name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
          </Col>
          <Col sm="6">
            <div className="mb-4">
              <Form.Label htmlFor="rating">Your name *</Form.Label>
              <Form.Select name="rating" id="rating" className="focus-shadow-0">
                <option value="5">
                  &#9733;&#9733;&#9733;&#9733;&#9733; (5/5)
                </option>
                <option value="4">
                  &#9733;&#9733;&#9733;&#9733;&#9734; (4/5)
                </option>
                <option value="3">
                  &#9733;&#9733;&#9733;&#9734;&#9734; (3/5)
                </option>
                <option value="2">
                  &#9733;&#9733;&#9734;&#9734;&#9734; (2/5)
                </option>
                <option value="1">
                  &#9733;&#9734;&#9734;&#9734;&#9734; (1/5)
                </option>
              </Form.Select>
            </div>
          </Col>
        </Row>
        <div className="mb-4">
          <Form.Label htmlFor="email">Your name *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter your  email"
            required
          />
        </div>
        <div className="mb-4">
          <Form.Label htmlFor="review">Review text *</Form.Label>
          <Form.Control
            rows="4"
            type="textarea"
            name="review"
            id="review"
            placeholder="Enter your review"
            required
          />
        </div>
        <Button type="submit" variant="outline-dark">
          Post review
        </Button>
      </Form>
      <p className="text-muted text-sm">
        <Badge bg="info-light" text="info">
          Note
        </Badge>{" "}
        This form shows usage of the classic Bootstrap form controls, not their
        underlined variants. You can choose whichever variant you want.
      </p>
    </div>
  )
}

export default ReviewForm
