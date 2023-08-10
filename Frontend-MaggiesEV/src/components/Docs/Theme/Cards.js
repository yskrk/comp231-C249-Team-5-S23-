import React from "react"
import CardProduct from "../../CardProduct"
import CardPost from "../../CardPost"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"
import products from "../../../data/products-clothes.json"
import blogPosts from "../../../data/blog-posts.json"
import { Col, Row } from "react-bootstrap"

const Cards = () => {
  return (
    <div id="cards" className="docs-item element">
      <h5 className="text-uppercase mb-4">Cards</h5>
      <div className="docs-desc">
        <p className="lead">This theme comes with two card styles.</p>
      </div>
      <div className="docs-desc mt-5">
        <p className="mb-3">
          <b>CardProduct component</b> - supported props
        </p>
        <ul>
          <li>
            <b>product</b> - product object
          </li>
          <li>
            <b>masonry</b> - if true, masonry image will be selected from
            product object
          </li>
        </ul>
        <Row className="mt-4">
          {products.slice(0, 4).map((product, index) => (
            <Col key={index} sm="4" xl="3" xs="6">
              <CardProduct product={product} />
            </Col>
          ))}
        </Row>
        <div className="mt-3">
          <SyntaxHighlighter
            language="javascript"
            style={tomorrow}
            className="rounded shadow p-4"
          >
            {highlightCode}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="docs-desc mt-5">
        <p className="mb-3">
          <b>CardPost component</b> - supported props
        </p>
        <ul>
          <li>
            <b>post</b> - post object
          </li>
          <li>
            <b>category</b> - if true, category style view enabled
          </li>
        </ul>
        <Row className="mt-4">
          {blogPosts.slice(0, 3).map((post, index) => (
            <CardPost key={index} post={post} category />
          ))}
        </Row>
        <div className="mt-3">
          <SyntaxHighlighter
            language="javascript"
            style={tomorrow}
            className="rounded shadow p-4"
          >
            {postCardCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

export default Cards

const highlightCode = `import { Col, Row } from 'react-bootstrap'
import CardProduct from '/CardProduct'
import products from '/products.json'

const Component = () => {
    return (
        <Row>
            {products.map((product, index) =>
                <Col key={index} sm="4" xl="3" xs="6">
                    <CardProduct product={product} />
                </Col>
            )}
        </Row>
    )
}

export default Component
`

const postCardCode = `import { Col, Row } from 'react-bootstrap'
import CardPost from '/CardPost'
import posts from '/posts.json'

const Component = () => {
    return (
        <Row className="mt-4">
            {posts.map((post, index) =>
                <CardPost key={index} post={post} category />
            )}
        </Row>
    )
}

export default Component
`
