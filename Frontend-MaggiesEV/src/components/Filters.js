import React from "react"

import { Col, Collapse, Form } from "react-bootstrap"

import PriceSlider from "./PriceSlider"

const Filters = (props) => {

	// Collapse state
	const [collapse, setCollapse] = React.useState({})
	const toggleCollapse = (name) => {
		setCollapse({ ...collapse, [name]: !collapse[name] })
	}



	// Checkbox filter component
	const CheckboxesFilter = ({ data }) => (
		<Form className="mt-4 mt-lg-0">
			{data.map((item) => (
				<div key={item._id} className="mb-1">
					<Form.Check
						type="checkbox"
						name={item.name}
						id={item._id}
						label={<React.Fragment>{item.name}</React.Fragment>}
						checked={item.isChecked}
						onChange={(e) => props.onCheckBoxChange(e)}
					/>
				</div>
			))}
		</Form>
	)



	// Filters for sidebar	
	const sidebarFilters = [
		{
			component: <PriceSlider />,
			title: "Filter by price",
			subtitle: "Price",
		},
		{
			component: <CheckboxesFilter data={props.brands} />,
			title: "Filter by brand",
			subtitle: "Brand",
		},
	]



	return sidebarFilters.map((filter, index) => (
		<div key={index} className="sidebar-block px-3 px-lg-0">			
			<a
				className="d-lg-none block-toggler"
				data-toggle="collapse"
				aria-expanded={collapse[filter.subtitle]}
				onClick={() => toggleCollapse(filter.subtitle)}
			>
				{filter.title}
				<span className="block-toggler-icon" />
			</a>


			<Collapse in={collapse[filter.subtitle]} className="expand-lg">
				<div>
					<h5 className="sidebar-heading d-none d-lg-block">
						{filter.subtitle}
					</h5>
					{filter.component}
				</div>
			</Collapse>
		</div>
	));
}

export default Filters
