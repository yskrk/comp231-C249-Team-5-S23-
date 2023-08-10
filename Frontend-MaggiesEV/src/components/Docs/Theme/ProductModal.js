import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"
import ModalQuickView from "../../ModalQuickView"
import dummyProduct from "../../../data/dummyproduct.json"
import { Button } from "react-bootstrap"

const ProductModal = () => {
  const [quickView, setQuickView] = React.useState(false)
  return (
    <div id="productmodal" className="docs-item element">
      <h5 className="text-uppercase mb-4">Product Modal</h5>
      <div className="docs-desc">
        <p className="lead">
          A component based on a Bootstrap modal with a product images carousel
        </p>
        <Button
          variant="outline-primary"
          onClick={() => setQuickView(!quickView)}
        >
          Toggle product modal
        </Button>
      </div>
      <div className="mt-5">
        <ModalQuickView
          isOpen={quickView}
          toggle={() => setQuickView()}
          product={dummyProduct}
        />
      </div>
      <div className="mt-5">
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

export default ProductModal

const highlightCode = `import ModalQuickView from '../../ModalQuickView'

const Component = () => {
    const [quickView, setQuickView] = React.useState(false)
    return (
        <div>
            <button onClick={() => setQuickView(!quickView)}>Toggle product modal</button>
            <ModalQuickView isOpen={quickView} toggle={() => setQuickView()} product={product}/>
        </div>
    )
}

export default Component
`
