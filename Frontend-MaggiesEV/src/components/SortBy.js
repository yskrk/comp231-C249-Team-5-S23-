import React from 'react'
import SelectBox from './SelectBox'

const SortBy = props => {

    const options = [
        {
            "value": "sortBy_0",
            "label": "Default"
        },
        {
            "value": "sortBy_1",
            "label": "Popularity"
        },
        {
            "value": "sortBy_2",
            "label": "Rating"
        },
        {
            "value": "sortBy_3",
            "label": "Newest first"
        }
    ]

    return (
        <SelectBox options={options} />
    )
};

export default SortBy;