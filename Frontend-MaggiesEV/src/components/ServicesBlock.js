import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Icon from "./Icon"

const ServicesBlock = () => {
  return (
    <div className="py-5 py-lg-6 bg-gray-100">
      <Container>
        <Row>
          {services.map((service) => (
            <Col
              key={service.name}
              lg="3"
              sm="6"
              className="py-4 service-column"
            >
              <Icon className="service-icon" icon={service.icon} />
              <div className="service-text">
                <h6 className="text-sm mb-1">{service.name}</h6>
                <p className="text-muted fw-light text-sm mb-0">
                  {service.text}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ServicesBlock

const services = [
  {
    name: "Free shipping & return",
    text: "Free Shipping over $300",
    icon: "delivery-time-1",
  },
  {
    name: "Money back guarantee",
    text: "30 Days Money Back Guarantee",
    icon: "money-1",
  },
  {
    name: "Best prices",
    text: "Always the best prices",
    icon: "special-price-1",
  },
  {
    name: "020-800-456-747",
    text: "24/7 Available Support",
    icon: "customer-support-1",
  },
]
