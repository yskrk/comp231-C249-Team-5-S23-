import React from "react"

import Link from "next/link"

import { Card, Button } from "react-bootstrap"
import { CartContext } from "../components/CartContext"
import { FormContext } from "./FormContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const OrderSummary = (props) => {
  const [cartItems] = React.useContext(CartContext)
  const [formInputs] = React.useContext(FormContext)
  const subTotal = cartItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  )
  const shipping = formInputs.shipping ? formInputs.shipping[2] : 10
  return (
    <Card className="mb-5">
      <Card.Header>
        <h6 className="mb-0">Order Summary</h6>
      </Card.Header>
      <Card.Body className="py-4">
        <p className="text-muted text-sm">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>
        <Card.Text as="table" className="table">
          <tbody>
            <tr>
              <th className="py-4">Order Subtotal </th>
              <td className="py-4 text-end text-muted">
                ${subTotal.toFixed(2)}
              </td>
            </tr>
            <tr>
              <th className="py-4">Shipping and handling</th>
              <td className="py-4 text-end text-muted">
                {" "}
                ${shipping.toFixed(2)}
              </td>
            </tr>
            <tr>
              <th className="py-4">Tax</th>
              <td className="py-4 text-end text-muted">$0.00</td>
            </tr>
            <tr>
              <th className="pt-4 border-0">Total</th>
              <td className="pt-4 border-0 text-end h3 fw-normal">
                ${(subTotal + shipping).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </Card.Text>
      </Card.Body>
      {props.showProceedToCheckout && (
        <Card.Footer className="overflow-hidden p-0">
          <div className="d-grid">
            <Link href="/checkout1" passHref>
              <Button variant="primary" className="py-3">
                Proceed to Checkout{" "}
                <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
              </Button>
            </Link>
          </div>
        </Card.Footer>
      )}
    </Card>
  )
}

export default OrderSummary
