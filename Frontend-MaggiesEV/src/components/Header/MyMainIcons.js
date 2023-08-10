import React from "react"

import Icon from "../Icon"

const MyMainIcons = (props) => {

	return (
		<React.Fragment>
			<ul className={`list-inline mb-0 ${props.className}`}>

				<li className="list-inline-item position-relative me-3">
					<a href="/cart" className={`text-${props.light ? "light" : "dark"} text-hover-primary`}>
						<Icon icon="retail-bag-1" className="navbar-icon" />
					</a>
				</li>

			</ul>
		</React.Fragment>
	)
}

export default MyMainIcons
