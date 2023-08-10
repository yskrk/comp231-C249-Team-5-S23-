import React from "react"

import { Row } from "react-bootstrap"
import Filters from "../../Filters"

const FiltersComponent = () => {
  return (
    <div id="filters" className="docs-item element">
      <h5 className="text-uppercase mb-4">Filters</h5>
      <div className="docs-desc">
        <p className="lead">
          Filters component allows you to show filters either above products or
          in sidebar in product category.
        </p>
      </div>
      <div className="mt-5">
        <Row>
          <Filters top />
        </Row>
      </div>
    </div>
  )
}

export default FiltersComponent
