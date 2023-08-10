import React from 'react'

import Select from 'react-select'

const ReactSelect = () => {
    const customSelectStyles = {
        control: (provided, state) => ({
            ...provided,
            border: '1px solid #ced4da',
            borderRadius: '0',
            width: 200,
            cursor: 'pointer'
        }),
        indicatorSeparator: (provided, state) => ({
            display: 'none'
        }),
        menu: (provided, state) => ({
            ...provided,
            color: '#343a40',
            border: '0 solid #fff',
            boxShadow: '0 0 1.2rem rgba(0, 0, 0, .15)'

        }),
        option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
            ...provided,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? '#bcac76'
                    : isFocused
                        ? '#eee'
                        : null,
            ':active': {
                ...provided[':active'],
                backgroundColor: '#e2dabc',
            },
            cursor: 'pointer'
        })
    }
    return (
        <div id="react-select" className="docs-item element">
            <h5 className="text-uppercase mb-4">React Select</h5>
            <div className="docs-desc">
                <p className="lead">Varkala Theme uses React Select plugin for showing select input. You can customize it using props.</p>
                <p>
                    <a href="https://react-select.com/" className="btn btn-outline-dark btn-sm">Visit plugin website</a>
                </p>
            </div>
            <div className="mt-5">
                <Select
                    instanceId="sortBySelect"
                    options={selectOptions}
                    defaultValue={selectOptions[0]}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    styles={customSelectStyles}
                    isSearchable={false}
                />
            </div>
        </div>
    )
};

export default ReactSelect;


const selectOptions = [
    {
        "value": "popular",
        "label": "Most popular"

    },
    {
        "value": "recommended",
        "label": "Recommended"

    },
    {
        "value": "newest",
        "label": "Newest"

    },
    {
        "value": "oldest",
        "label": "Oldest"

    },
    {
        "value": "closest",
        "label": "Closest"

    }
]