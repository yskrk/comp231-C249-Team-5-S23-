import React from "react"
import Select from "react-select"

const SelectBox = ({ options, id }) => {
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #ced4da",
      borderRadius: "0",
      width: 200,
      cursor: "pointer",
    }),
    indicatorSeparator: (provided, state) => ({
      display: "none",
    }),
    menu: (provided, state) => ({
      ...provided,
      color: "#343a40",
      border: "0 solid #fff",
      borderRadius: 0,
      boxShadow: "0 0 1.2rem rgba(0, 0, 0, .15)",
    }),
    option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
      ...provided,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "#bcac76"
        : isFocused
        ? "#eee"
        : null,
      ":active": {
        ...provided[":active"],
        backgroundColor: "#e2dabc",
      },
      cursor: "pointer",
    }),
  }

  return (
    <Select
      name="sortby"
      id={`form_sort-${id}`}
      instanceId={`form_sort-${id}`}
      options={options}
      autosize={true}
      defaultValue={options[0]}
      className="react-select-container"
      classNamePrefix="react-select"
      styles={customSelectStyles}
      isSearchable={false}
    />
  )
}

export default SelectBox
