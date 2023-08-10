import React, { useState } from "react"
import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  InputGroup,
  CloseButton,
  Badge,
} from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { CartContext } from "./CartContext"
import { addCartItem } from "../hooks/UseCart"
import { addWishlistItem } from "../hooks/UseWishlist"
import { WishlistContext } from "./WishlistContext"
import Stars from "./Stars"
import Link from "next/link"
import SelectBox from "./SelectBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import Image from "./Image"
// swiper core styles
import "swiper/css"
const ModalQuickView = ({ isOpen, toggle, product }) => {
  const swiperRef = React.useRef(null) // Swiper reference for slideTo method
  const [quantity, setQuantity] = React.useState("1") // Product quantity state
  const [currentIndex, updateCurrentIndex] = React.useState(0) // Swiper current image index
  const [cartItems, dispatch] = React.useContext(CartContext) // Cart context
  const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext) // Wishlist context

  const [activeType, setActiveType] = useState("material_0_modal")

  // Add item to cart
  const addToCart = (e, product) => {
    e.preventDefault()
    addCartItem(product, quantity)
    dispatch({ type: "add", payload: product, quantity: quantity })
  }

  // Remove item from cart
  const addToWishlist = (e, product) => {
    e.preventDefault()
    addWishlistItem(product)
    wishlistDispatch({ type: "add", payload: product })
  }

  // Swiper params
  const params = {
    on: {
      slideChange: () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    },
  }

  // Slide to Swiper slide
  const slideTo = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index + 1)
      updateCurrentIndex(index)
    }
  }

  // On quantity change
  const onChange = (e) => {
    const value = e.target.value
    setQuantity(value)
  }

  // Dummy product sizes - remove on production
  const sizes = [
    {
      value: "value_0",
      label: "Small",
    },
    {
      value: "value_1",
      label: "Medium",
    },
    {
      value: "value_2",
      label: "Large",
    },
  ]
  return (
    <Modal show={isOpen} onHide={toggle} size="xl">
      {/* CLOSE BUTTON */}
      <CloseButton
        className="btn-close-absolute btn-close-rotate"
        onClick={toggle}
        type="button"
      />
      {/* END CLOSE BUTTON */}

      {/* MODAL BODY */}
      <Modal.Body className="quickview-body">
        <Row>
          <Col lg="6">
            <div className="detail-carousel">
              {/* PRODUCT BADGES */}
              {product.sale && <Badge className="product-badge">Sale</Badge>}
              {product.new && (
                <Badge bg="secondary" className="product-badge">
                  Fresh
                </Badge>
              )}
              {product.soldout && (
                <Badge className="product-badge" bg="dark">
                  Sold out
                </Badge>
              )}
              {/* END PRODUCT BADGES */}

              {/* SWIPER GALLERY */}
              <Swiper {...params} loop ref={swiperRef}>
                {product.img.detail.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className="img-fluid"
                      src={image.img}
                      alt={image.alt}
                      width={538}
                      height={538}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* SWIPER THUMBS */}
              <div className="swiper-thumbs">
                {product.img.detail.map((image, index) => (
                  <button
                    key={image.img}
                    onClick={() => slideTo(index)}
                    className={`swiper-thumb-item detail-thumb-item mb-3 ${
                      currentIndex === index ? "active" : ""
                    }`}
                  >
                    <Image
                      className="img-fluid"
                      src={image.img}
                      alt={image.alt}
                      width={82}
                      height={82}
                    />
                  </button>
                ))}
              </div>
              {/* END SWIPER THUMBS */}

              {/* END SWIPER GALLERY */}
            </div>
          </Col>
          <Col lg="6" className="p-lg-5">
            <h2 className="mb-4 mt-4 mt-lg-1">{product.name}</h2>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
              {/* PRODUCT PRICES */}
              <ul className="list-inline mb-2 mb-sm-0">
                <li className="list-inline-item h4 fw-light mb-0">
                  ${product.price.toFixed(2)}
                </li>
                <li className="list-inline-item text-muted fw-light">
                  <del>$90.00</del>
                </li>
              </ul>
              {/* END PRODUCT PRICES */}

              {/* PRODUCT REVIEWS STARS */}
              <div className="d-flex align-items-center text-sm">
                <Stars
                  stars={product.stars}
                  className="me-2 mb-0"
                  secondColor="gray-300"
                />
                <span className="text-muted text-uppercase">25 reviews</span>
              </div>
              {/* END PRODUCT REVIEWS STARS */}
            </div>

            {/* PRODUCT DESRIPTION */}
            <p className="mb-4 text-muted">
              Samsa was a travelling salesman - and above it there hung a
              picture that he had recently cut out of an illustrated magazine
              and housed in a nice, gilded frame.
            </p>
            {/* END PRODUCT DESCRIPTION */}

            <Form>
              <Row>
                {/* PRODUCT SIZES */}
                <Col sm="6" lg="12" className="detail-option mb-4">
                  <h6 className="detail-option-heading">
                    Size <span>(required)</span>
                  </h6>
                  <SelectBox options={sizes} />
                </Col>
                {/* END PRODUCT SIZES */}

                {/* PRODUCT TYPES */}
                <Col sm="6" lg="12" className="detail-option mb-5">
                  <h6 className="detail-option-heading">
                    Type <span>(required)</span>
                  </h6>

                  <Button
                    as="label"
                    variant="outline-primary"
                    className={`detail-option-btn-label me-1 ${
                      activeType === "material_0_modal" ? "active" : ""
                    }`}
                    size="sm"
                    htmlFor="material_0_modal"
                  >
                    Hoodie
                    <Form.Control
                      className="input-invisible"
                      type="radio"
                      name="material"
                      value="value_0"
                      id="material_0_modal"
                      onChange={() => setActiveType("material_0_modal")}
                      required
                    />
                  </Button>
                  <Button
                    as="label"
                    variant="outline-primary"
                    className={`detail-option-btn-label ${
                      activeType === "material_1_modal" ? "active" : ""
                    }`}
                    size="sm"
                    htmlFor="material_1_modal"
                  >
                    College
                    <Form.Control
                      className="input-invisible"
                      type="radio"
                      name="material"
                      value="value_1"
                      id="material_1_modal"
                      onChange={() => setActiveType("material_1_modal")}
                      required
                    />
                  </Button>
                </Col>
                {/* END PRODUCT TYPES */}
              </Row>

              {/* ADD TO CART BUTTON */}
              <InputGroup className="w-100 mb-4">
                {/* QUANTITY INPUT */}
                <Form.Control
                  size="lg"
                  className="detail-quantity"
                  name="items"
                  type="number"
                  value={(quantity > 0 && quantity) || ""}
                  onChange={(e) => onChange(e)}
                />
                {/* END QUANTITY INPUT */}

                {/* ADD TO CART */}
                <Button
                  variant="dark"
                  onClick={(e) => addToCart(e, product)}
                  className="flex-grow-1"
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="me-2 flex-grow-1"
                  />
                  Add to Cart
                </Button>
                {/* END ADD TO CART */}
              </InputGroup>
              {/* END ADD TO CART BUTTON */}

              <Row className="mb-4">
                <Col xs="6">
                  {/* ADD TO WISHLIST */}
                  <a href="#" onClick={(e) => addToWishlist(e, product)}>
                    <FontAwesomeIcon icon={faHeart} className="me-2" />
                    Add to wishlist
                  </a>
                  {/* END ADD TO WISHLIST */}
                </Col>
                <Col xs="6" className="text-end">
                  {/* SOCIAL */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-2">
                      <a className="text-dark text-hover-primary" href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-dark text-hover-primary" href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                  </ul>
                  {/* END SOCIAL */}
                </Col>
              </Row>
              <ul className="list-unstyled">
                {/* PRODUCT CATEGORIES */}
                <li>
                  <strong>Category:</strong>{" "}
                  <Link
                    href={
                      product.category
                        ? `/${product.category[1]}`
                        : "/category-full"
                    }
                  >
                    <a onClick={toggle} className="text-muted">
                      {product.category ? product.category[0] : "Jeans"}
                    </a>
                  </Link>
                </li>
                {/* END PRODUCT CATEGORIES */}

                {/* PRODUCT TAGS */}
                <li>
                  <strong>Tags:</strong>{" "}
                  <a className="text-muted" href="#">
                    Leisure
                  </a>
                  ,{" "}
                  <a className="text-muted" href="#">
                    Elegant
                  </a>
                </li>
                {/* END PRODUCT TAGS */}
              </ul>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      {/* END MODAL BODY */}
    </Modal>
  )
}

export default ModalQuickView
