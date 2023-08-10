import React from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Stars = (props) => {
  const starsArray = []
  for (let i = 1; i <= 5; i++) {
    i <= props.stars
      ? starsArray.push(
          <FontAwesomeIcon
            icon={faStar}
            key={i}
            className={`${
              props.color ? "text-" + props.color : "text-primary"
            } ${props.starClass ? props.starClass : ""}`}
          />
        )
      : starsArray.push(
          <FontAwesomeIcon
            icon={faStar}
            key={i}
            className={`text-${
              props.secondColor ? props.secondColor : "muted"
            } ${props.starClass ? props.starClass : ""}`}
          />
        )
  }
  return <div className={props.className}>{starsArray}</div>
}

export default Stars
