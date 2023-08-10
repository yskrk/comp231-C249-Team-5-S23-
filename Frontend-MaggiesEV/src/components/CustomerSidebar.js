import React from "react"

import { Badge, ListGroup } from "react-bootstrap"
import { WishlistContext } from "../components/WishlistContext"

import Icon from "../components/Icon"
import ActiveLink from "./ActiveLink"
import Image from "./Image"

const CustomerSidebar = () => {
  const [wishlistItems, dispatch] = React.useContext(WishlistContext)
  return (
    <div className="customer-sidebar card border-0">
      <div className="customer-profile">
        <a className="d-inline-block" href="#">
          <Image
            className="img-fluid rounded-circle customer-image"
            src="/img/avatar/avatar-0.jpg"
            alt=""
            width={144}
            height={144}
          />
        </a>
        <h5>Jane Doe</h5>
        <p className="text-muted text-sm mb-0">Los Angeles, CA</p>
      </div>
      <ListGroup className="customer-nav">
        <ActiveLink href="/customer-orders" activeClassName="active" passHref>
          <ListGroup.Item
            as="a"
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <Icon icon="paper-bag-1" className="svg-icon-heavy me-2" />
              Orders
            </span>
            <Badge pill className="fw-normal px-3" bg="light" text="dark">
              5
            </Badge>
          </ListGroup.Item>
        </ActiveLink>
        <ActiveLink href="/customer-account" activeClassName="active" passHref>
          <ListGroup.Item
            as="a"
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <Icon icon="male-user-1" className="svg-icon-heavy me-2" />
              Profile
            </span>
          </ListGroup.Item>
        </ActiveLink>
        <ActiveLink
          href="/customer-addresses"
          activeClassName="active"
          passHref
        >
          <ListGroup.Item
            as="a"
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <Icon icon="real-estate-1" className="svg-icon-heavy me-2" />
              Addresses
            </span>
          </ListGroup.Item>
        </ActiveLink>
        <ActiveLink href="/customer-wishlist" activeClassName="active" passHref>
          <ListGroup.Item
            as="a"
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <Icon icon="heart-1" className="svg-icon-heavy me-2" />
              Wishlist
            </span>
            <Badge pill className="fw-normal px-3" bg="light" text="dark">
              {wishlistItems.length}
            </Badge>
          </ListGroup.Item>
        </ActiveLink>
        <ActiveLink href="/customer-login" activeClassName="active" passHref>
          <ListGroup.Item
            as="a"
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <Icon icon="exit-1" className="svg-icon-heavy me-2" />
              Log out
            </span>
          </ListGroup.Item>
        </ActiveLink>
      </ListGroup>
    </div>
  )
}

export default CustomerSidebar
