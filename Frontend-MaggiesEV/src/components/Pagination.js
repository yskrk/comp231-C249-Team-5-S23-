import React from "react"
import { Pagination } from "react-bootstrap"
import Icon from "./Icon"

const PaginationComponent = (props) => {
  return (
    <Pagination
      aria-label="Page navigation example"
      className="d-flex justify-content-center mb-5 mt-3"
    >
      <Pagination.Item className="page-arrow" href="#">
        <span aria-hidden="true">
          <Icon icon="angle-left-1" className="page-icon" />
        </span>
        <span className="sr-only">Previous</span>
      </Pagination.Item>
      <Pagination.Item active href="#">
        1
      </Pagination.Item>
      <Pagination.Item href="#">2</Pagination.Item>
      <Pagination.Item href="#">3</Pagination.Item>
      <Pagination.Item href="#">4</Pagination.Item>
      <Pagination.Item className="page-arrow" href="#">
        <span aria-hidden="true">
          <Icon icon="angle-right-1" className="page-icon" />
        </span>
        <span className="sr-only">Next</span>
      </Pagination.Item>
    </Pagination>
  )
}

export default PaginationComponent
