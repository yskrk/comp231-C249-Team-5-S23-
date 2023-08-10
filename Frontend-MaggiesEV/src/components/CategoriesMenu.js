import React, { useState } from "react"
import { Collapse } from "react-bootstrap"
import Icon from "./Icon"

import categories from "../data/categoriesmenu.json"
import Link from "next/link"

const CategoriesMenu = ({ long }) => {
	const [collapse, setCollapse] = useState({
		[categories.categories[0].name]: true,
	})

	const toggleCollapse = (name) => {
		setCollapse({ ...collapse, [name]: !collapse[name] })
	}

	const categoriesArray = long
		? categories.categories
		: categories.categories.slice(0, 3)

	return (
		<div className="sidebar-block px-3 px-lg-0">
			<a
				className="d-lg-none block-toggler"
				aria-expanded={collapse[categories.name]}
				onClick={() => toggleCollapse(categories.name)}
			>
				{categories.name}
				<span className="block-toggler-icon" />
			</a>


			<Collapse in={collapse[categories.name]} className="expand-lg">
				<div>
					<h5 className="sidebar-heading d-none d-lg-block">
						{categories.subtitle}
					</h5>

					<div className="sidebar-icon-menu mt-4 mt-lg-0">


						{categoriesArray.map((category) => (
							<div
								key={category.name}
								className="sidebar-icon-menu-item active"
								data-toggle="collapse"
								aria-expanded={collapse[category.name]}
								onClick={() => toggleCollapse(category.name)}
							>

								<div className="d-flex align-items-center">
									<Icon icon={category.icon} className="sidebar-icon" />
									<a className="sidebar-icon-menu-link fw-bold me-2">
										{category.name}
									</a>
									<span className="sidebar-icon-menu-count">
										{" "}
										{category.productcount}
									</span>
								</div>


								<Collapse in={collapse[category.name]}>
									<div>
										<ul className="sidebar-icon-menu sidebar-icon-submenu">
											{category.subcategories.map((subcategory, index) => (
												<li key={index} className="sidebar-icon-submenu-item">
													<Link href={subcategory.link}>
														<a className="sidebar-icon-submenu-link link-animated link-animated-light">
															{subcategory.name}
														</a>
													</Link>
												</li>
											))}
										</ul>
									</div>
								</Collapse>

								
							</div>
						))}


					</div>
				</div>
			</Collapse>
		</div>
	)
}

export default CategoriesMenu
