import React, { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  Dropdown,
  NavItem,
  NavLink,
} from "react-bootstrap"
import MainIcons from "../../Header/MainIcons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
const NavbarComponent = () => {
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)

  return (
    <div id="navbar" className="docs-item element">
      <h5 className="text-uppercase mb-4">Navbar</h5>
      <div className="docs-desc">
        <p className="lead">
          {" "}
          Bootstrap’s powerful, responsive navigation header, the navbar.
          Includes support for branding, navigation, and more, including support
          for our collapse plugin. See the{" "}
          <a href="https://react-bootstrap.github.io/components/navbar/">
            React Bootstrap documentation
          </a>
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Navbar expand="lg" variant="light" className="shadow mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Varkala</Navbar.Brand>
            <Navbar.Toggle aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Item className="active">
                  <Nav.Link href="#">
                    Home <span className="sr-only">(current)</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Link</Nav.Link>
                </Nav.Item>
                <Dropdown
                  as={NavItem}
                  onToggle={() => setDropdown1(!dropdown1)}
                >
                  <Dropdown.Toggle as={NavLink}>Dropdown</Dropdown.Toggle>
                  <Dropdown.Menu className={`${!dropdown1 ? "hide" : ""}`}>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Item>
                  <Nav.Link href="#" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Form className="my-2 my-lg-0 d-sm-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="me-sm-2"
                />
                <Button
                  type="submit"
                  variant="outline-dark"
                  className="my-2 my-sm-0"
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar expand="lg" variant="light" className="shadow mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Varkala</Navbar.Brand>
            <MainIcons className="d-block d-lg-none" />
            <Navbar.Toggle aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className="mt-3 mt-lg-0">
                <Nav.Item className="active">
                  <Nav.Link href="#">
                    Home <span className="sr-only">(current)</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Link</Nav.Link>
                </Nav.Item>
                <Dropdown
                  as={NavItem}
                  onToggle={() => setDropdown2(!dropdown2)}
                >
                  <Dropdown.Toggle as={NavLink}>Dropdown</Dropdown.Toggle>
                  <Dropdown.Menu className={`${!dropdown2 ? "hide" : ""}`}>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <MainIcons
                className="ms-auto mb-0 d-none d-lg-block"
                sidebarRight
              />
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar expand="lg" variant="dark" bg="dark" className="shadow mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Varkala</Navbar.Brand>
            <MainIcons className="d-block d-lg-none" light />
            <Navbar.Toggle aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav>
                <Nav.Item className="active">
                  <Nav.Link href="#">
                    Home <span className="sr-only">(current)</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Link</Nav.Link>
                </Nav.Item>
                <Dropdown
                  as={NavItem}
                  onToggle={() => setDropdown3(!dropdown3)}
                >
                  <Dropdown.Toggle as={NavLink}>Dropdown</Dropdown.Toggle>
                  <Dropdown.Menu className={`${!dropdown3 ? "hide" : ""}`}>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <MainIcons
                className="ms-auto mb-0 d-none d-lg-block"
                sidebarRight
                light
              />
            </Navbar.Collapse>
          </Container>
        </Navbar>
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

export default NavbarComponent

const highlightCode = `import { Navbar, Dropdown, Container, NavItem, NavLink, } from 'react-bootstrap'

const Component = () => {
    
    return (
      <Navbar expand="lg" variant="light" className="shadow mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Varkala</Navbar.Brand>
          <Navbar.Toggle aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Item className="active">
                <Nav.Link href="#">
                  Home <span className="sr-only">(current)</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Link</Nav.Link>
              </Nav.Item>
              <Dropdown
                as={NavItem}
              >
                <Dropdown.Toggle as={NavLink}>Dropdown</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item>
                <Nav.Link href="#" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Component
`
