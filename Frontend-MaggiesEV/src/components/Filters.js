import React from "react"

import { Col, Collapse, Form } from "react-bootstrap"

// import brands from "../data/brands.json"
import PriceSlider from "./PriceSlider"

const Filters = ({ top, brands }) => {

	// TODO: Delete comments.
	// // Filter inputs state where all inputs all stored.
	// const [filterInputs, setFilterInputs] = React.useState({
	// 	// Remove or customize on PROD - Some brands are preselected by "checked" property. Using reduce they're set default in state.
	// 	"clothes-brand": brands.reduce(
	// 		(a, item) => (item.checked && a.push(item.value), a),
	// 		[]
	// 	)
	// })



	// Collapse state
	const [collapse, setCollapse] = React.useState({})
	const toggleCollapse = (name) => {
		setCollapse({ ...collapse, [name]: !collapse[name] })
	}



	// On input change func
	const onInputChange = (e) => {
		const type = e.target.type // Input type
		const value = e.target.id // Input value
		const name = e.target.name // Input name

		// type === "radio" // If input type radio
		// 	? setFilterInputs({ ...filterInputs, [name]: value })
		// 	: // If not input type radio
		// 	filterInputs[name] // If input group exists
		// 		? filterInputs[name].some((item) => item === value) // If item exists in array > remove
		// 			? setFilterInputs({
		// 				...filterInputs,
		// 				[name]: filterInputs[name].filter((x) => x !== value),
		// 			})
		// 			: setFilterInputs({
		// 				...filterInputs,
		// 				[name]: [...filterInputs[name], value],
		// 			}) // If item doesn't exists in array > add it to input group
		// 		: setFilterInputs({ ...filterInputs, [name]: [value] }) // If input group doesn't exists > create input group and add value
	}



	// Checkbox filter component
	const CheckboxesFilter = ({ data }) => (
		<Form className={top ? "" : "mt-4 mt-lg-0"}>
			{data.map((item) => (
				<div key={item._id} className="mb-1">
					<Form.Check
						type="checkbox"
						name={item.name}
						id={item._id}
						label={<React.Fragment>{item.name}</React.Fragment>}
						// checked={filterInputs[item.name]? filterInputs[item.name].includes(item.value): ""}
						onChange={(e) => onInputChange(e)}
					/>
				</div>
			))}
		</Form>
	)



	// Filters for sidebar	
	const sidebarFilters = [
		{
			component: <PriceSlider top={top} />,
			title: "Filter by price",
			subtitle: "Price",
		},
		{
			component: <CheckboxesFilter data={brands} />,
			title: "Filter by brand",
			subtitle: "Brand",
		},
	]



	return sidebarFilters.map((filter, index) => (
		<div key={index} className="sidebar-block px-3 px-lg-0">
			{/* COLLAPSE TOGGLE */}
			<a
				className="d-lg-none block-toggler"
				data-toggle="collapse"
				aria-expanded={collapse[filter.subtitle]}
				onClick={() => toggleCollapse(filter.subtitle)}
			>
				{filter.title}
				<span className="block-toggler-icon" />
			</a>
			{/* END COLLAPSE TOGGLE */}

			{/* COLLAPSE */}
			<Collapse in={collapse[filter.subtitle]} className="expand-lg">
				<div>
					<h5 className="sidebar-heading d-none d-lg-block">
						{filter.subtitle}
					</h5>

					{/* FILTER */}
					{filter.component}
					{/* END FILTER */}
				</div>
			</Collapse>
			{/* END COLLAPSE */}
		</div>
	));
}

export default Filters
