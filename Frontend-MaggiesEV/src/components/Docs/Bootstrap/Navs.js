import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Card, Nav, Tab } from "react-bootstrap"

const Navs = () => {
  return (
    <div id="navs" className="docs-item element">
      <h5 className="text-uppercase mb-4">Navs</h5>
      <div className="docs-desc">
        <p className="lead">
          Documentation and examples for how to use Bootstrap’s included
          navigation components. See the{" "}
          <a href="https://react-bootstrap.github.io/components/navs/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Card className="mb-3">
          <Card.Body>
            <h6 className="title-decorative">Horizontal</h6>
            <Nav>
              <Nav.Item>
                <Nav.Link href="#" active>
                  Active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h6 className="title-decorative">Vertical</h6>
            <Nav className="flex-md-column">
              <Nav.Link href="#" className="active">
                Active
              </Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h6 className="mb-4">Tabs</h6>
            <Tab.Container defaultActiveKey="first">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="py-5 px-3">
                <Tab.Pane eventKey="first">
                  <p className="text-muted">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className="text-muted">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me?" he thought. It wasn't a
                    dream.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className="text-muted">
                    His room, a proper human room although a little too small,
                    lay peacefully between its four familiar walls. A collection
                    of textile samples lay spread out on the table.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
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

export default Navs

const highlightCode = `import { Nav, Tab } from 'react-bootstrap'

export default () => {
    return (
        <Tab.Container defaultActiveKey="first">
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content activeTab={tab} className="py-5 px-3">
                <Tab.Pane eventKey="first">
                    <p className="text-muted">
                        One morning, when Gregor Samsa woke from troubled dreams, he
                        found himself transformed in his bed into a horrible vermin.
                        He lay on his armour-like back, and if he lifted his head a
                        little he could see his brown belly, slightly domed and
                        divided by arches into stiff sections
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <p className="text-muted">
                        The bedding was hardly able to cover it and seemed ready to
                        slide off any moment. His many legs, pitifully thin compared
                        with the size of the rest of him, waved about helplessly as
                        he looked. "What's happened to me?" he thought. It wasn't a
                        dream.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <p className="text-muted">
                        His room, a proper human room although a little too small,
                        lay peacefully between its four familiar walls. A collection
                        of textile samples lay spread out on the table.
                    </p>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    )
}`
