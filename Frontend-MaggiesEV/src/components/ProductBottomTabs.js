import React from "react"

import { Container, Row, Col, Nav, Tab } from "react-bootstrap"

import ReviewForm from "../components/ReviewForm"
import Stars from "../components/Stars"
import Avatar from "./Avatar"

import Image from "./Image"

const ProductBottomTabs = ({ product }) => {
  const groupByN = (n, data) => {
    let result = []
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n))
    return result
  }

  const groupedAdditionalInfo = groupByN(4, product.additionalinfo)
  return (
    <section className="mt-5">
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Nav variant="tabs" className="flex-column flex-sm-row">
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                className={`detail-nav-link`}
                style={{ cursor: "pointer" }}
              >
                Description
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                className={`detail-nav-link`}
                style={{ cursor: "pointer" }}
              >
                Additional Information
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="third"
                className={`detail-nav-link`}
                style={{ cursor: "pointer" }}
              >
                Reviews
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="py-4">
            <Tab.Pane className="px-3" eventKey="first">
              <Row>
                <Col
                  md="7"
                  dangerouslySetInnerHTML={{ __html: product.description.long }}
                />
                <Col md="5">
                  <Image
                    className="img-fluid"
                    src={product.description.image}
                    alt={product.name}
                    width={507}
                    height={507}
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Row>
                {groupedAdditionalInfo.map((infoBlock, index) => (
                  <Col key={index} md="6">
                    <table className="table text-sm">
                      <tbody>
                        {infoBlock.map((info, index) => (
                          <tr key={index}>
                            <th className="fw-normal border-0">{info.name}</th>
                            <td className="text-muted border-0">{info.text}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Row className="mb-5">
                <Col lg="10" xl="9">
                  {product.reviews.map((review) => (
                    <div key={review.author} className="review d-flex">
                      <div className="text-center me-4 me-xl-5">
                        <Avatar
                          size="xl"
                          image={review.avatar}
                          alt={review.author}
                          border
                          className="p-2 mb-2"
                        />

                        <span className="text-uppercase text-muted">
                          {review.date}
                        </span>
                      </div>
                      <div>
                        <h5 className="mt-2 mb-1">{review.author}</h5>
                        <div className="mb-2">
                          <Stars
                            stars={review.stars}
                            color="warning"
                            secondColor="gray-200"
                            starClass="fa-xs"
                          />
                        </div>
                        <p className="text-muted">{review.text}</p>
                      </div>
                    </div>
                  ))}
                  <ReviewForm />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  )
}

export default ProductBottomTabs
