import React from "react"

export default function Colors({
  options,
  disabled,
  id,
  setSelectedImage,
  className,
}) {
  return (
    <ul className={`list-inline mb-0 ${className ?? ""}`}>
      {options.map((option, index) => (
        <li className="list-inline-item me-1" key={option.color}>
          <input
            className={`product-color-input ${
              disabled ? "disabled" : ""
            } d-none`}
            id={id + "_" + index}
            type="radio"
            name={id + "_colors"}
            onChange={() => !disabled && setSelectedImage(index)}
          />
          <label
            className="product-color"
            htmlFor={id + "_" + index}
            style={{ background: option.color }}
          />
        </li>
      ))}
    </ul>
  )
}
