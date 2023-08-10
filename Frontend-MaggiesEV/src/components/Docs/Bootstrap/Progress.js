import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Card, ProgressBar } from "react-bootstrap"

const ProgressComponent = () => {
  return (
    <div id="progress" className="docs-item element">
      <h5 className="text-uppercase mb-4">Progress</h5>
      <div className="docs-desc">
        <p className="lead">
          Bootstrap custom progress bars featuring support for stacked bars,
          animated backgrounds, and text labels. See the{" "}
          <a href="https://react-bootstrap.github.io/components/progress/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Card>
          <Card.Body>
            <ProgressBar now={25} variant="primary" className="mb-3" />
            <ProgressBar now={50} variant="info" className="mb-3" />
            <ProgressBar now={75} variant="gray-600" className="mb-3" />
            <ProgressBar now={100} variant="dark" />
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

export default ProgressComponent

const highlightCode = `import { ProgressBar } from 'react-bootstrap'

export default () => {
    return (
        <>
            <ProgressBar now={25} variant="primary" />
            <ProgressBar now={50} variant="info" />
            <ProgressBar now={75} variant="success" />
            <ProgressBar now={100} variant="secondary" />
        </>
    )
}`
