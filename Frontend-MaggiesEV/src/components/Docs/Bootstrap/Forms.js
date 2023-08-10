import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Card, Form, InputGroup, InputGroupText } from "react-bootstrap"

const Forms = () => {
  return (
    <div id="forms" className="docs-item element">
      <h5 className="text-uppercase mb-4">Forms</h5>
      <div className="docs-desc">
        <p className="lead">
          Examples and usage guidelines for form control styles, layout options,
          and custom components for creating a wide variety of forms. See the{" "}
          <a href="https://react-bootstrap.github.io/components/forms/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Card className="mb-3">
          <Card.Body>
            <h6 className="text-uppercase mb-4">Form Group</h6>
            <Form>
              <div className="mb-4">
                <Form.Label htmlFor="exampleInputEmail1">
                  Email address
                </Form.Label>
                <Form.Control
                  id="exampleInputEmail1"
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <Form.Text id="emailHelp">
                  We'll never share your email with anyone else.
                </Form.Text>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h6 className="text-uppercase mb-4">Input Sizes</h6>
            <Form>
              <div className="mb-4">
                <Form.Control
                  size="sm"
                  id="exampleInputSm"
                  type="text"
                  aria-describedby="inputSm"
                  placeholder="Form Control Small"
                />
              </div>
              <div className="mb-4">
                <Form.Control
                  id="exampleInputSt"
                  type="text"
                  aria-describedby="inputSt"
                  placeholder="Form Control Standard"
                />
              </div>
              <div className="mb-4">
                <Form.Control
                  size="lg"
                  id="exampleInputLg"
                  type="text"
                  aria-describedby="inputLg"
                  placeholder="Form Control Large"
                />
              </div>
            </Form>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h6 className="text-uppercase mb-4">Input Group</h6>
            <Form>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h6 className="text-uppercase mb-4"> Custom Inputs</h6>
            <Form>
              <div className="mb-4">
                <Form.Check
                  type="checkbox"
                  id="custom-check-1"
                  label="Check this custom checkbox"
                />
              </div>
              <div className="mb-4">
                <Form.Check
                  id="custom-switch-1"
                  type="switch"
                  label="Switch this custom checkbox"
                  defaultChecked
                />
              </div>
              <div className="mb-4">
                <Form.Check
                  type="radio"
                  id="radio1"
                  name="radio"
                  label="Toggle this custom radio"
                />
                <Form.Check
                  type="radio"
                  id="radio2"
                  name="radio"
                  label="Or toggle this other custom radio"
                />
              </div>
              <div className="mb-4">
                <Form.Select defaultValue="0" id="select">
                  <option value="0">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="mb-4">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" id="customFile" />
              </div>
            </Form>
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

export default Forms

const highlightCode = `import { Form } from 'react-bootstrap'

export default () => {
    return (
        <Form>
            <div className="mb-4>
                <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                <Form.Control id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <Form.Text id="emailHelp">We'll never share your email with anyone else.</Form.Text>
            </div>
        </Form>
    )
}`
