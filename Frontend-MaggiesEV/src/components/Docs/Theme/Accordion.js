import React, { useContext } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap"

const AccordionComponent = () => {
  const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext)
    const decoratedOnClick = useAccordionButton(eventKey)
    const isCurrentEventKey = activeEventKey === eventKey
    return (
      <span
        style={{ cursor: "pointer" }}
        onClick={decoratedOnClick}
        className="block-toggler  py-3"
        aria-expanded={isCurrentEventKey}
      >
        {children}
        <span className="block-toggler-icon" />
      </span>
    )
  }
  return (
    <div id="accordion" className="docs-item element">
      <h5 className="text-uppercase mb-4">Accordion</h5>
      <div className="docs-desc">
        <p className="lead">
          Block components used to create an Accordion using Bootstrap' collapse
          plugin.
        </p>
      </div>
      <div className="mt-5">
        <div role="tablist">
          <Accordion defaultActiveKey="0">
            <CustomToggle eventKey="0" className="">
              Option one
            </CustomToggle>
            <Accordion.Collapse eventKey="0">
              <div className="p-3">
                <p className="text-muted mb-0">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pitifully thin compared
                  with the size of the rest of him, waved about helplessly as he
                  looked. &quot;What's happened to me?&quot; he thought. It
                  wasn't a dream.
                </p>
              </div>
            </Accordion.Collapse>
            <CustomToggle eventKey="1" className="">
              Option one
            </CustomToggle>
            <Accordion.Collapse eventKey="1">
              <div className="p-3">
                <p className="text-muted mb-0">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pitifully thin compared
                  with the size of the rest of him, waved about helplessly as he
                  looked. &quot;What's happened to me?&quot; he thought. It
                  wasn't a dream.
                </p>
              </div>
            </Accordion.Collapse>
            <CustomToggle eventKey="2" className="">
              Option one
            </CustomToggle>
            <Accordion.Collapse eventKey="2">
              <div className="p-3">
                <p className="text-muted mb-0">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pitifully thin compared
                  with the size of the rest of him, waved about helplessly as he
                  looked. &quot;What's happened to me?&quot; he thought. It
                  wasn't a dream.
                </p>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
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

export default AccordionComponent

const highlightCode = `import { Accordion, useAccordionButton, AccordionContext } from "react-bootstrap"

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext)
    const decoratedOnClick = useAccordionButton(eventKey)
    const isCurrentEventKey = activeEventKey === eventKey
    return (
      <span
        style={{ cursor: "pointer" }}
        onClick={decoratedOnClick}
        className="block-toggler  py-3"
        aria-expanded={isCurrentEventKey}
      >
        {children}
        <span className="block-toggler-icon" />
      </span>
    )
  }
return (
    <div role="tablist">
        <Accordion defaultActiveKey="0">
            <CustomToggle eventKey="0" className="">
                Option one
            </CustomToggle>
            <Accordion.Collapse eventKey="0">
                <div className="p-3">
                <p className="text-muted mb-0">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him, waved about helplessly as he
                    looked. &quot;What's happened to me?&quot; he thought. It
                    wasn't a dream.
                </p>
                </div>
            </Accordion.Collapse>
            <CustomToggle eventKey="1" className="">
                Option one
            </CustomToggle>
            <Accordion.Collapse eventKey="1">
                <div className="p-3">
                <p className="text-muted mb-0">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him, waved about helplessly as he
                    looked. &quot;What's happened to me?&quot; he thought. It
                    wasn't a dream.
                </p>
                </div>
            </Accordion.Collapse>
            <CustomToggle eventKey="2" className="">
                Option one
            </CustomToggle>
            <Accordion.Collapse eventKey="2">
                <div className="p-3">
                <p className="text-muted mb-0">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him, waved about helplessly as he
                    looked. &quot;What's happened to me?&quot; he thought. It
                    wasn't a dream.
                </p>
                </div>
            </Accordion.Collapse>
        </Accordion>
    </div>
)`
