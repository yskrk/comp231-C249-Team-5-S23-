import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Alert } from "react-bootstrap"
import Icon from "../../Icon"

const Alerts = () => {
  const [hide, setHide] = React.useState({})
  const alerts = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]
  return (
    <div id="alerts" className="docs-item element">
      <h5 className="text-uppercase mb-4">Alert</h5>
      <div className="docs-desc">
        <p className="lead">
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages. See the{" "}
          <a href="https://react-bootstrap.github.io/components/alerts/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <div className="docs-example">
          {alerts.map((alertColor) => (
            <Alert
              key={alertColor}
              show={hide[alertColor]}
              onClose={() => setHide({ ...hide, [alertColor]: false })}
              variant={alertColor}
              className="d-flex align-items-center pe-3"
              dismissible
            >
              <Icon
                icon="delivery-1"
                className="d-none d-sm-block w-3rem h-3rem svg-icon-light flex-shrink-0 me-3"
              />
              This is a {alertColor} alert—check it out!{" "}
            </Alert>
          ))}
        </div>
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

export default Alerts

const highlightCode = `import { Alert } from 'react-bootstrap'

const Component = () => {
    const [visible, setVisible] = React.useState(false)
    return (
        <Alert show={visible} onClose={() => setVisible(false)} variant="primary" className="d-flex align-items-center pe-3">
            <Icon icon="delivery-1" className="d-none d-sm-block w-3rem h-3rem svg-icon-light flex-shrink-0 me-3" />This is a primary alert—check it out! 
           
        </Alert>
    )
}

export default Component
`
