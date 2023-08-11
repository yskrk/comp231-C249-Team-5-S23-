import React, { useState } from "react"

import Filters from "./Filters"
import Icon from "./Icon"
import SortBy from "./SortBy"
import { Row, Button, Collapse } from "react-bootstrap"
import ListingsSearchBlock from "./ListingsSearchBlock"

const CategoryTopBar = (props) => {
	return (
		<header className="product-grid-header justify-content-between">

			<div>
				<ListingsSearchBlock searchComponentProps={props.searchComponentProps} />
			</div>

			<div className="mb-3 d-flex align-items-center">
				<span className="d-inline-block me-2">Sort by</span>
				<SortBy />
			</div>
		</header>
	);
}

export default CategoryTopBar
