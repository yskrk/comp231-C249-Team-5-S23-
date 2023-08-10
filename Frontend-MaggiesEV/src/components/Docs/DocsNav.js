import React from "react"

import { Nav } from "react-bootstrap"

import ActiveLink from "../ActiveLink"

const DocsNav = () => {
  return (
    <div style={{ top: "40px", zIndex: "1" }} className="sticky-top mb-5">
      <div className="sidebar-block">
        <h6 className="sidebar-heading">Documentation</h6>
        <Nav as="nav" variant="pills" className="flex-column">
          <ActiveLink
            activeClassName="active"
            href="/docs/introduction"
            passHref
          >
            <Nav.Link className="mb-2">Introduction</Nav.Link>
          </ActiveLink>
          <ActiveLink
            activeClassName="active"
            href="/docs/directory-structure"
            passHref
          >
            <Nav.Link className="mb-2">Directory structure</Nav.Link>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/docs/next" passHref>
            <Nav.Link className="mb-2">Next.js</Nav.Link>
          </ActiveLink>
          <ActiveLink
            activeClassName="active"
            href="/docs/customizing-css"
            passHref
          >
            <Nav.Link className="mb-2">Customizing CSS</Nav.Link>
          </ActiveLink>
          <ActiveLink
            activeClassName="active"
            href="/docs/migration-v2"
            passHref
          >
            <Nav.Link className="mb-2">Migration to v2</Nav.Link>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/docs/demo-data" passHref>
            <Nav.Link className="mb-2">Demo data</Nav.Link>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/docs/credits" passHref>
            <Nav.Link className="mb-2">Credits</Nav.Link>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/docs/changelog" passHref>
            <Nav.Link className="mb-2">Changelog</Nav.Link>
          </ActiveLink>
        </Nav>
      </div>
      <div className="sidebar-block">
        <h6 className="sidebar-heading">Components</h6>
        <Nav as="nav" variant="pills" className="flex-column">
          <ActiveLink
            activeClassName="active"
            href="/docs/components-bootstrap"
            passHref
          >
            <Nav.Link className="mb-2">Bootstrap</Nav.Link>
          </ActiveLink>
          <ActiveLink
            activeClassName="active"
            href="/docs/components-theme"
            passHref
          >
            <Nav.Link className="mb-2">Theme</Nav.Link>
          </ActiveLink>
        </Nav>
      </div>
    </div>
  )
}

export default DocsNav
