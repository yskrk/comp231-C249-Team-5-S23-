import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Card, Button } from "react-bootstrap"

const Buttons = () => {
  return (
    <div id="buttons" className="docs-item element">
      <h5 className="text-uppercase mb-4">Buttons</h5>
      <div className="docs-desc">
        <p className="lead">
          Use Bootstrap’s custom button styles for actions in forms, dialogs,
          and more with support for multiple sizes, states, and more. See the{" "}
          <a href="https://react-bootstrap.github.io/components/buttons/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Card className="mb-3">
          <Card.Body>
            <h6 className="text-uppercase mb-4">Button Colors</h6>
            <Button variant="primary" className="me-1 mb-2">
              Primary
            </Button>
            <Button variant="secondary" className="me-1 mb-2">
              Secondary
            </Button>
            <Button variant="muted" className="me-1 mb-2">
              Muted
            </Button>
            <Button variant="success" className="me-1 mb-2">
              Success
            </Button>
            <Button variant="danger" className="me-1 mb-2">
              Danger
            </Button>
            <Button variant="warning" className="me-1 mb-2">
              Warning
            </Button>
            <Button variant="info" className="me-1 mb-2">
              Info
            </Button>
            <Button variant="light" className="me-1 mb-2">
              Light
            </Button>
            <Button variant="dark" className="me-1 mb-2">
              Dark
            </Button>
            <Button variant="link" className="me-1 mb-2">
              Link
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h6 className="text-uppercase mb-4">Button Sizes</h6>
            <Button variant="dark" size="lg" className="me-1 mb-2">
              Large button
            </Button>
            <Button variant="dark" className="me-1 mb-2">
              Standard button
            </Button>
            <Button variant="dark" size="sm" className="me-1 mb-2">
              Small button
            </Button>
          </Card.Body>
        </Card>
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

export default Buttons

const highlightCode = `import { Button } from 'react-bootstrap'

const Component = () => {
    return (
        <>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
        </>
    )
}

export default Component
`
