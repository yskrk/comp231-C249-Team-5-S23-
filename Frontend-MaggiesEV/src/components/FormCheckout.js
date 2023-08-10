import React from "react"

import Link from "next/link"

import { Row, Col, Form, Button, Collapse, Card } from "react-bootstrap"

import { FormContext } from "./FormContext"

import data from "../data/checkout.json"

import CartItems from "./CartItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const FormCheckout = ({ step, next, prev }) => {
  const [formInputs, setFormInputs] = React.useContext(FormContext) // Checkout inputs context

  const [collapse, setCollapse] = React.useState(
    formInputs["show-shipping-address"]
      ? formInputs["show-shipping-address"]
      : false
  )
  const [multiCollapse, setMultiCollapse] = React.useState(
    formInputs["Payment Method"]
      ? Object.keys(formInputs["Payment Method"])[0]
      : {}
  ) // Set default first payment method

  const toggleCollapse = (e, name) => {
    // Set collapse by name
    e.preventDefault()
    setMultiCollapse(name)
  }
  const onChange = (e, groupName, tabName) => {
    // On input change

    const value = e.target.value // Input value
    groupName // If group value present set group value
      ? formInputs[groupName] // If group input value present set update
        ? setFormInputs({
            ...formInputs,
            [groupName]: {
              [tabName]: {
                ...formInputs[groupName][tabName],
                [e.target.name]: value,
              },
            },
          })
        : // else set values
          setFormInputs({
            ...formInputs,
            [groupName]: { [tabName]: { [e.target.name]: value } },
          })
      : // else set single input
        setFormInputs({ ...formInputs, [e.target.name]: value })
  }
  const onRadioChange = (e, input, groupName, tabName) => {
    // On radio input change

    const value = e.target.id // Input value

    groupName // If group value present set group value
      ? setFormInputs({
          ...formInputs,
          [groupName]: { [tabName]: [value, input.label] },
        })
      : // else set single input
        setFormInputs({
          ...formInputs,
          [e.target.name]: [value, input.label, input.price],
        })
  }

  return (
    <Form>
      {data.map((block) => {
        return block.step === step ? ( // Checkout step check
          <Collapse
            key={block.name}
            in={block.collapse ? formInputs["show-shipping-address"] : true}
          >
            <div>
              {block.title && (
                <h3 className={block.titleclass}>{block.name}</h3>
              )}

              {/* INPUTS */}
              {block.inputs && (
                <Row>
                  {block.inputs.map((input, index) => (
                    <React.Fragment key={index}>
                      {/* TEXT INPUT */}
                      {input.type === "text" && (
                        <Col md={6} key={index} className="mb-4">
                          <Form.Label htmlFor={input.name}>
                            {input.label}
                          </Form.Label>
                          <Form.Control
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            id={input.name}
                            value={formInputs[input.name] || ""}
                            onChange={(e) => onChange(e)}
                          />
                        </Col>
                      )}
                      {/* END TEXT INPUT */}

                      {/* SHIPPING ADRESS TOGGLER */}
                      {input.toggleshipping && (
                        <Col xs={12} key={index} className="mb-4 mt-3">
                          <div className="custom-control custom-checkbox">
                            {/* On change set shipping address form open and set value to context */}
                            <Form.Check
                              className="custom-control-input"
                              onChange={(e) =>
                                setFormInputs({
                                  ...formInputs,
                                  [e.target.name]: collapse,
                                })
                              }
                              id={input.name}
                              type={input.type}
                              name={input.name}
                              label={input.label}
                              onClick={() => setCollapse(!collapse)}
                              checked={formInputs[input.name] || ""}
                            />
                          </div>
                        </Col>
                      )}
                      {/* END SHIPPING ADRESS TOGGLER */}

                      {/* RADIO INPUT */}
                      {input.type === "radio" && (
                        <Col md="6" key={index}>
                          <div className="card-radio mb-4">
                            <label className="card-label" htmlFor={input.id} />
                            <input
                              className="card-radio-input"
                              type={input.type}
                              name={input.name}
                              id={input.id}
                              onChange={(e) => onRadioChange(e, input)} // On change func
                              checked={
                                formInputs[input.name]
                                  ? formInputs[input.name][0] === input.id
                                  : index === 0
                              } // Checked input control, if first input checked by default
                            />
                            <Card>
                              <Card.Header>
                                <h6 className="mb-0">{input.label}</h6>
                              </Card.Header>
                              <Card.Body>
                                {input.price && (
                                  <h6 className="mb-3">
                                    ${input.price.toFixed(2)}
                                  </h6>
                                )}
                                <p className="text-muted text-sm card-text">
                                  {input.text}
                                </p>
                              </Card.Body>
                            </Card>
                          </div>
                        </Col>
                      )}
                      {/* END RADIO INPUT */}
                    </React.Fragment>
                  ))}
                </Row>
              )}
              {/* END INPUTS */}

              {/* REVIEW CART ITEMS  */}
              {block.reviewtable && (
                <div className="mb-5">
                  <CartItems review />
                </div>
              )}
              {/* END REVIEW CART ITEMS */}

              {/* COLLAPSIBLE INPUTS */}
              {block.tabs && (
                <div className="mb-5">
                  {block.tabs.map((tab) => {
                    const isCollapse =
                      Object.keys(multiCollapse).length === 0
                        ? tab.default
                        : multiCollapse === tab.name
                    return (
                      <Card key={tab.name} className="border-0 shadow mb-3">
                        <Card.Header className="accordion-header">
                          <a
                            href="#"
                            className={`accordion-link ${
                              !isCollapse ? "collapsed" : ""
                            }`}
                            onClick={(e) => toggleCollapse(e, tab.name)}
                            aria-expanded={isCollapse}
                          >
                            {tab.name}
                          </a>
                        </Card.Header>
                        <Collapse in={isCollapse}>
                          <div>
                            <Card.Body className="py-5">
                              <Row>
                                {tab.inputs.map((input) =>
                                  input.type === "radio" ? (
                                    <Col key={input.name}>
                                      <Form.Check
                                        type={input.type}
                                        id={input.id}
                                        name={input.name}
                                        label={
                                          <React.Fragment>
                                            <span className="d-block h6 mt-1 mb-3">
                                              {input.label}
                                            </span>
                                            <span className="text-muted text-sm">
                                              {input.text}
                                            </span>
                                          </React.Fragment>
                                        }
                                        onChange={(e) =>
                                          onRadioChange(
                                            e,
                                            input,
                                            block.name,
                                            tab.name
                                          )
                                        } // On change func
                                        checked={
                                          (formInputs[block.name] &&
                                            formInputs[block.name][tab.name] &&
                                            formInputs[block.name][
                                              tab.name
                                            ][0] === input.id) ||
                                          false
                                        } // Checked input control
                                      />
                                    </Col>
                                  ) : (
                                    <Col
                                      md={input.col ? input.col : 6}
                                      key={input.name}
                                      className="mb-4"
                                    >
                                      <Form.Label htmlFor={input.name}>
                                        {input.label}
                                      </Form.Label>
                                      <Form.Control
                                        type={input.type}
                                        name={input.name}
                                        placeholder={input.placeholder}
                                        value={
                                          (formInputs[block.name] &&
                                            formInputs[block.name][tab.name] &&
                                            formInputs[block.name][tab.name][
                                              input.name
                                            ]) ||
                                          ""
                                        } // Checked input control
                                        onChange={(e) =>
                                          onChange(e, block.name, tab.name)
                                        } // On change func
                                      />
                                    </Col>
                                  )
                                )}
                              </Row>
                            </Card.Body>
                          </div>
                        </Collapse>
                      </Card>
                    )
                  })}
                </div>
              )}
              {/* END COLLAPSIBLE INPUTS */}
            </div>
          </Collapse>
        ) : (
          ""
        )
      })}

      {/* CHECKOUT PREV/NEXT BUTTONS */}
      <div className="my-5 d-flex justify-content-between flex-column flex-lg-row">
        <Link href={prev[1]} passHref>
          <Button variant="link" className="text-muted">
            <FontAwesomeIcon icon={faAngleLeft} className="me-2" />
            {prev[0]}
          </Button>
        </Link>
        <Link href={next[1]} passHref>
          <Button variant="dark">
            {next[0]}
            <FontAwesomeIcon icon={faAngleRight} className="ms-2" />
          </Button>
        </Link>
      </div>
      {/* END CHECKOUT PREV/NEXT BUTTONS */}
    </Form>
  )
}

export default FormCheckout
