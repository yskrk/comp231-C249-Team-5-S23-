import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Pagination } from "react-bootstrap"

const PaginationComponent = () => {
  return (
    <div id="pagination" className="docs-item element">
      <h5 className="text-uppercase mb-4">Pagination</h5>
      <div className="docs-desc">
        <p className="lead">
          Pagination to indicate a series of related content exists across
          multiple pages. See the{" "}
          <a href="https://react-bootstrap.github.io/components/pagination/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Pagination aria-label="Page navigation example">
          <Pagination.First href="#">Previous</Pagination.First>
          <Pagination.Item active href="#">
            1
          </Pagination.Item>
          <Pagination.Item href="#">2</Pagination.Item>
          <Pagination.Item href="#">3</Pagination.Item>
          <Pagination.Item href="#">4</Pagination.Item>
          <Pagination.Item href="#">5</Pagination.Item>
          <Pagination.Next href="#">Next</Pagination.Next>
        </Pagination>
      </div>
      <div className="mt-4">
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          className="rounded shadow p-4"
        >
          {highlightCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default PaginationComponent

const highlightCode = `import { Pagination } from 'react-bootstrap'

export default () => {
    return (
        <Pagination aria-label="Page navigation example">
            <Pagination.First href="#">Previous</Pagination.First>
            <Pagination.Item active href="#">
            1
            </Pagination.Item>
            <Pagination.Item href="#">2</Pagination.Item>
            <Pagination.Item href="#">3</Pagination.Item>
            <Pagination.Item href="#">4</Pagination.Item>
            <Pagination.Item href="#">5</Pagination.Item>
            <Pagination.Next href="#">Next</Pagination.Next>
        </Pagination>
    )
}`
