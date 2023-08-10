import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Dropdown } from "react-bootstrap"

const Dropdowns = () => {
  return (
    <div id="dropdowns" className="docs-item element">
      <h5 className="text-uppercase mb-4">Dropdowns</h5>
      <div className="docs-desc">
        <p className="lead">
          Toggle contextual overlays for displaying lists of links and more with
          the Bootstrap dropdown plugin. See the{" "}
          <a href="https://react-bootstrap.github.io/components/dropdowns/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Dropdown drop="down" className="d-inline-block">
          <Dropdown.Toggle variant="outline-dark">Default</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header className="fw-normal">
              Dropdown header
            </Dropdown.Header>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

export default Dropdowns

const highlightCode = `import { Dropdown } from 'react-bootstrap'

const Component = () => {
    return (
        <Dropdown className="d-inline-block" drop="down">
            <Dropdown.Toggle variant="outline-dark" caret>Default</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Header className="fw-normal">
                Dropdown header
              </Dropdown.Header>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Component
`
