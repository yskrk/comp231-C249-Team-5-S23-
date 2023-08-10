import React from "react"
import { Form, InputGroup, Button } from "react-bootstrap"
import Icon from "../Icon"
export default function SearchBlock() {
  return (
    <Form className="d-lg-flex ms-auto me-lg-5 me-xl-6 my-4 my-lg-0">
      <InputGroup className="input-group-underlined">
        <Form.Control
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="form-control-underlined ps-3"
        />
        <Button
          variant="underlined"
          className="ms-0"
          aria-label="search button"
        >
          <Icon className="navbar-icon" icon="search-1" />
        </Button>
      </InputGroup>
    </Form>
  )
}
