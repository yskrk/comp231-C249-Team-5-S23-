import React, { useState } from "react"
import { Row, Col, Dropdown, Badge, NavLink, NavItem } from "react-bootstrap"
import Icon from "../Icon"
import ActiveLink from "../ActiveLink"

import Image from "../Image"
export default function DropdownMenuItem({
  onLinkClick,
  item,
  parentName,
  viewportWidth,
}) {
  const [open, setOpen] = useState(false)
  const [toggleClick, setToggleClick] = useState(false)

  return (
    <Dropdown
      as={NavItem}
      className={item.megamenu ? "position-static" : ""}
      id={`dropdown-${item.name}`}
      onToggle={(e) => setOpen(e)}
      onClick={(e) =>
        setToggleClick(e.target.id === `dropdown-${item.name}-toggle`)
      }
    >
      {/* DROPDOWN TOGGLE */}
      <Dropdown.Toggle
        className={parentName === item.name ? "active" : ""}
        id={`dropdown-${item.name}-toggle`}
        as={NavLink}
      >
        {item.name}
      </Dropdown.Toggle>
      {/* END DROPDOWN TOGGLE */}

      {/* DROPDOWN MENU */}
      <Dropdown.Menu
        className={`${
          item.groups
            ? `py-0 dropdown-menu-animated dropdown-menu-${
                item.groups && item.size ? item.size : "md"
              }`
            : ""
        } ${
          item.icons ? "py-lg-0 dropdown-menu-animated dropdown-menu-md" : ""
        } ${item.megamenu ? "megamenu px-4 px-lg-5 py-lg-5" : ""} ${
          toggleClick && !open ? "hide" : ""
        }`}
        aria-labelledby={`dropdown-${item.name}-toggle`}
      >
        {/* SIMPLE MENU */}
        {item.links &&
          item.links.map((link, index) =>
            link.divider ? (
              // SIMPLE MENU DIVIDER
              link.name ? ( // If divider has name show header
                <Dropdown.Header key={index}>{link.name}</Dropdown.Header>
              ) : (
                // Else only line divider
                <Dropdown.Divider key={index} />
              )
            ) : (
              // SIMPLE MENU LINK
              <ActiveLink
                key={link.name}
                activeClassName="active"
                href={link.link}
                passHref
              >
                <Dropdown.Item onClick={() => onLinkClick(item.name)}>
                  {link.name}
                  {link.new && (
                    // IF NEW ITEM ADD BADGE
                    <Badge bg="primary-light" text="primary" className="ms-1">
                      New
                    </Badge>
                  )}
                </Dropdown.Item>
              </ActiveLink>
            )
          )}
        {/* END SIMPLE MENU */}

        {/* GROUP MENU */}
        {item.groups && (
          <Row>
            {item.groups.map((group, groupIndex) =>
              group.img ? (
                // GROUP IMAGE
                <Col
                  key={group.img}
                  lg="4"
                  className="d-none d-lg-block position-relative"
                >
                  <Image
                    className="bg-image"
                    src={group.img}
                    alt=""
                    layout="fill"
                  />
                </Col>
              ) : (
                // GROUP LINKS
                <Col
                  key={group.name ?? groupIndex}
                  lg="4"
                  sm="6"
                  className="p-lg-5"
                >
                  {group.name ? (
                    <Dropdown.Header className="h6 ps-lg-0">
                      {group.name}
                    </Dropdown.Header>
                  ) : (
                    <Dropdown.Header className="h6 ps-lg-0">
                      &nbsp;
                    </Dropdown.Header>
                  )}
                  {group.links.map((link) => (
                    // GROUP LINK
                    <ActiveLink
                      key={link.name}
                      activeClassName="active"
                      href={link.link}
                      passHref
                    >
                      <Dropdown.Item
                        className="ps-lg-0"
                        onClick={() => onLinkClick(item.name)}
                      >
                        {link.name}
                        {link.new && (
                          // IF NEW ITEM ADD BADGE
                          <Badge
                            bg="primary-light"
                            text="primary"
                            className="ms-1"
                          >
                            New
                          </Badge>
                        )}
                      </Dropdown.Item>
                    </ActiveLink>
                  ))}
                </Col>
              )
            )}
          </Row>
        )}
        {/* END GROUP MENU */}

        {/* ICONS MENU */}
        {item.icons && (
          <Dropdown.Item className="text-gray-900 p-0" as="div">
            <Row className="pt-lg-5 px-4">
              {item.icons.map((link) => (
                // ICONS MENU ITEM
                <Col
                  xs="6"
                  sm="3"
                  md="2"
                  className="text-center mb-2 mb-lg-5"
                  key={link.name}
                >
                  <ActiveLink activeClassName="active" href={link.link}>
                    <a
                      className="text-reset"
                      onClick={() => onLinkClick(item.name)}
                    >
                      <Icon
                        icon={link.icon}
                        className="w-3rem h-3rem mb-2 svg-icon-light"
                      />
                      <h6>{link.name}</h6>
                    </a>
                  </ActiveLink>
                </Col>
              ))}
            </Row>
            {item.text && (
              // ICONS MENU BOTTOM TEXT
              <div className="p-3 bg-primary text-center text-sm d-none d-lg-block">
                <p className="mb-0">{item.text}</p>
              </div>
            )}
          </Dropdown.Item>
        )}
        {/* END ICONS MENU */}

        {/* MEGA MENU */}
        {item.megamenu && ( // If megamenu
          <Dropdown.Item className="text-gray-900 p-0" as="div">
            <Row>
              {item.columns.map((column, index) => (
                // MEGA MENU COLUMN
                <Col key={index} lg="3" sm="6">
                  {column.img && (
                    // MEGA MENU IMAGE
                    <div className="img-fluid mb-3 d-none d-lg-block">
                      <Image
                        width={278}
                        height={186}
                        className="img-fluid"
                        src={column.img + "?include"}
                        alt=""
                      />
                    </div>
                  )}
                  {column.lists.map((list) => (
                    // MEGA MENU COLUMN BLOCK
                    <React.Fragment key={list.name}>
                      <h6>{list.name}</h6>
                      <ul className="megamenu-list list-unstyled">
                        {list.links.map((link) => (
                          // MEGA MENU COLUMN BLOCK ITEM
                          <li key={link.name} className="megamenu-list-item">
                            <ActiveLink
                              activeClassName="active"
                              href={link.link}
                              passHref
                            >
                              <a
                                className="megamenu-list-link"
                                onClick={() => onLinkClick(item.name)}
                              >
                                {link.name}{" "}
                                {link.new && (
                                  // IF NEW ITEM ADD BADGE
                                  <Badge
                                    bg="primary-light"
                                    text="primary"
                                    className="ms-1"
                                  >
                                    New
                                  </Badge>
                                )}
                              </a>
                            </ActiveLink>
                          </li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ))}
                </Col>
              ))}
            </Row>
          </Dropdown.Item>
        )}
        {/* END MEGA MENU */}
      </Dropdown.Menu>
      {/* END DROPDOWN MENU */}
    </Dropdown>
  )
}
