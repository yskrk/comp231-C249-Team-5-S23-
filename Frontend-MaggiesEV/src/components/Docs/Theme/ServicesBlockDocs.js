import React from "react"

import ServicesBlock from "../../ServicesBlock"

const ServicesBlockDocs = () => {
  return (
    <div id="servicesblock" className="docs-item element">
      <h5 className="text-uppercase mb-4">SERVICES BLOCK</h5>
      <div className="docs-desc">
        <p className="lead">
          Easily format main advantages or services in the services block.
          Columns in this block have a border on the right which disappears on
          smaller display sizes.
        </p>
      </div>
      <div className="mt-5">
        <ServicesBlock />
      </div>
    </div>
  )
}

export default ServicesBlockDocs
