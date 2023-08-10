import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Collapse,
} from "react-bootstrap"

import data from "../data/footer.json"

import Icon from "./Icon"
import Link from "next/link"
import ServicesBlock from "./ServicesBlock"

const Footer = () => {
  const [columnOpen, setColumnOpen] = useState({})

  const toggleColumn = (e, name) => {
    e.preventDefault()
    setColumnOpen({ ...columnOpen, [name]: !columnOpen[name] })
  }
  return (
    <footer>
      <ServicesBlock />
      <div className="py-6 text-muted">
        <Container>
          <Row>
            <Col lg="5" className="pe-lg-5 pe-xl-6 mb-5 mb-lg-0">
              <h6 className="text-dark letter-spacing-1 mb-4">
                {data.newsletter.name}
              </h6>
              <p className="text-sm mb-3">{data.newsletter.text}</p>
              <Form>
                <InputGroup className="input-group-underlined mb-3">
                  <Form.Control
                    className="form-control-underlined"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <Button
                    variant="underlined"
                    className="ms-0 text-gray-700 py-0"
                    type="submit"
                    aria-label="confirm email"
                  >
                    <Icon className="w-2rem h-2rem" icon="envelope-1" />
                  </Button>
                </InputGroup>
              </Form>
            </Col>
            <Col lg="7">
              <Row>
                {data.columns.map((column) => (
                  <Col key={column.name} lg="4">
                    <a
                      href="/#"
                      className="d-lg-none block-toggler my-3"
                      aria-expanded={columnOpen[column.name]}
                      onClick={(e) => toggleColumn(e, column.name)}
                    >
                      {column.name}
                      <span className="block-toggler-icon"></span>
                    </a>
                    <Collapse
                      in={columnOpen[column.name]}
                      className="expand-lg"
                    >
                      <div>
                        <h6 className="text-dark letter-spacing-1 mb-4 d-none d-lg-block">
                          {column.name}
                        </h6>
                        <ul className="list-unstyled text-sm pt-2 pt-lg-0">
                          {column.links.map((link) => (
                            <li key={link.name} className="mb-2">
                              <Link href={link.link}>
                                <a className="text-muted text-hover-dark link-animated">
                                  {link.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Collapse>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-4 fw-light text-muted">
        <Container>
          <Row className="align-items-center text-sm text-gray-500">
            <Col lg="4" className="text-center text-lg-start">
              <p className="mb-lg-0">
                &copy; {new Date().getFullYear()} Your company. All rights
                reserved.
              </p>
            </Col>
            <Col lg="8">
              <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-lg-end">
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="#">
                    Terms &amp; Conditions{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="#">
                    Privacy &amp; cookies{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="#">
                    Accessibility{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="#">
                    Customer Data Promise{" "}
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
