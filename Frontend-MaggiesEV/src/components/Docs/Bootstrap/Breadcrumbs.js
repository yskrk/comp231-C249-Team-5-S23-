import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Card, Breadcrumb } from "react-bootstrap"

const Breadcrumbs = () => {
  return (
    <div id="breadcrumb" className="docs-item element">
      <h5 className="text-uppercase mb-4">Breadcrumb</h5>
      <div className="docs-desc">
        <p className="lead">
          Indicate the current page’s location within a navigational hierarchy
          that automatically adds separators via CSS.. See the{" "}
          <a href="https://react-bootstrap.github.io/components/breadcrumb/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Card className="mb-3">
          <Card.Body>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
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

export default Breadcrumbs

const highlightCode = `import { Breadcrumb } from 'react-bootstrap'

    const Component = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Page
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Component
`
