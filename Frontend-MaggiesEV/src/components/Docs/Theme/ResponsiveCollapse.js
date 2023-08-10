import React from "react"

import { Col, Collapse, Form, Row } from "react-bootstrap"

import sizes from "../../../data/sizes.json"

const ResponsiveCollapse = () => {
  const [collapse, setCollapse] = React.useState(false)
  return (
    <div id="responsivecollapse" className="docs-item element">
      <h5 className="text-uppercase mb-4">RESPONSIVE COLLAPSE</h5>
      <div className="docs-desc">
        <p className="lead">
          Responsive collapse blocks with a toggler link. Used in the sidebar
          for collapsing the inactive menu blocks on smaller displays. Add{" "}
          <code>.expand-lg</code> to a <code>.collapse</code> block and it will
          expand on lg+ displays. This component is used on the sidebar blocks
          in the product categories.
        </p>
      </div>
      <div className="mt-5">
        <Row>
          <Col md="6" lg="4">
            <a
              className="d-lg-none block-toggler"
              data-toggle="collapse"
              aria-expanded={collapse}
              onClick={() => setCollapse(!collapse)}
            >
              Filter by size
              <span className="block-toggler-icon" />
            </a>
            <Collapse in={collapse} className="expand-lg">
              <div>
                <h5 className="sidebar-heading d-none d-lg-block">
                  Filter by size
                </h5>
                <Form className="mt-4 mt-lg-0">
                  {sizes.map((size) => (
                    <div key={size.value} className="mb-1">
                      <Form.Check
                        type="radio"
                        name="size"
                        id={size.value}
                        label={size.name}
                        defaultChecked={size.checked}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </Collapse>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ResponsiveCollapse
