import React from "react"
import Link from "next/link"

import { Col } from "react-bootstrap"
import Image from "./Image"

const CardPost = ({ post, category }) => {
  return (
    <Col lg="4" sm="6" className={`mb-5 ${category ? "px-lg-5" : ""}`}>
      <div data-aos="zoom-in">
        <Link href={`/blog/${post.slug}`}>
          <a className="d-block mb-4">
            <Image
              className="img-fluid"
              src={post.img}
              alt=""
              width={366}
              height={244}
            />
          </a>
        </Link>
        <h5 className="mb-2">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-dark">{post.name}</a>
          </Link>
        </h5>
        <p className="text-gray-500 text-sm">
          <Link href={`/blog`}>
            <a className="text-uppercase text-xs me-2">{post.category[0]}</a>
          </Link>
          {post.date}
        </p>
      </div>
    </Col>
  )
}

export default CardPost
