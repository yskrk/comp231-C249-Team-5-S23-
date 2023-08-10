import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Card, OverlayTrigger, Button, Tooltip } from "react-bootstrap"

const Tooltips = () => {
  const [tooltipActive, setTooltipActive] = React.useState({})

  const toggle = (name) => {
    setTooltipActive({ ...tooltipActive, [name]: !tooltipActive[name] })
  }
  return (
    <div id="tooltips" className="docs-item element">
      <h5 className="text-uppercase mb-4">Tooltips</h5>
      <div className="docs-desc">
        <p className="lead">
          Custom Bootstrap tooltips with CSS and JavaScript using CSS3 for
          animations and data-attributes for local title storage. See the{" "}
          <a href="https://react-bootstrap.github.io/components/overlays/#tooltips">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Card>
          <Card.Body>
            {["top", "right", "bottom", "left"].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    Tooltip on <strong>{placement}</strong>.
                  </Tooltip>
                }
              >
                <Button variant="outline-dark" className="mb-1 me-1">
                  Tooltip on {placement}
                </Button>
              </OverlayTrigger>
            ))}
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

export default Tooltips

const highlightCode = `import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap'

export default () => {
    return (
        <>
            {["top", "right", "bottom", "left"].map((placement) => (
                <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                        <Tooltip id={\`tooltip-\${placement}\`}>
                            Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                    }
                >
                    <Button variant="outline-primary" className="mb-1 me-1">
                        Tooltip on {placement}
                    </Button>
                </OverlayTrigger>
            ))}
        </>
    )
}`
