import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Row, Col, Card, Button } from "react-bootstrap"

const CardComponent = () => {
  return (
    <div id="card" className="docs-item element">
      <h5 className="text-uppercase mb-4">Card</h5>
      <div className="docs-desc">
        <p className="lead">
          Bootstrap’s cards provide a flexible and extensible content container
          with multiple variants and options.. See the{" "}
          <a href="https://react-bootstrap.github.io/components/cards/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Row>
          <Col md="6">
            <Card className="border-0 shadow mb-3">
              <Card.Img
                variant="top"
                src="/img/blog/christopher-campbell-28571-unsplash.jpg"
                alt="Card image cap"
              />
              <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button href="#" variant="outline-primary">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="text-white border-0 shadow dark-overlay overflow-hidden">
              <Card.Img
                src="/img/blog/photo-1534126511673-b6899657816a.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay className="d-flex align-items-center">
                <div className="overlay-content">
                  <Card.Title className="text-uppercase fw-normal" as="h3">
                    Card title
                  </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-sm">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
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

export default CardComponent

const highlightCode = `import { Card, Button } from 'react-bootstrap'

const Component = () => {
    return (
        <Card>
            <Card.Img top src="/img/blog/christopher-campbell-28571-unsplash.jpg" alt="Card image cap" />
            <Card.Body>
                <CardTitle as="h4">Card title</CardTitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button href="#" variant="outline-primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Component
`
