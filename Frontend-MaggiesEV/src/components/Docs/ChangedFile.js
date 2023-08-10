import React from "react"
import { Badge } from "react-bootstrap"

export default function ChangedFile({ type, name }) {
  return (
    <React.Fragment>
      {type === "m" && (
        <Badge bg="warning-light" text="warning">
          M
        </Badge>
      )}
      {type === "a" && (
        <Badge bg="success-light" text="success">
          A
        </Badge>
      )}
      {type === "r" && (
        <Badge bg="info-light" text="info">
          R
        </Badge>
      )}
      {type === "d" && (
        <Badge bg="danger-light" text="danger">
          D
        </Badge>
      )}{" "}
      {name}
    </React.Fragment>
  )
}
