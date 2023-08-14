import React, { useEffect } from "react"
import Router from "next/router"
import Link from "next/link"
import { Nav, Navbar, NavLink } from "react-bootstrap"

import menu from "../../data/menu.json"

import Icon from "../Icon"
import ActiveLink from "../ActiveLink"
// import MainIcons from "./MainIcons"

import initialProducts from "../../data/products-clothes.json" // Remove on production

import { CartContext } from "../CartContext"

import { addCartItem } from "../../hooks/UseCart"
import { WishlistContext } from "../WishlistContext"
import { addWishlistItem } from "../../hooks/UseWishlist"
import TopBar from "./TopBar"
import SearchBlock from "./SearchBlock"
import DropdownMenuItem from "./DropdownMenuItem"
import UseWindowSize from "../../hooks/UseWindowSize"
import MyMainIcons from "./MyMainIcons"

const Header = ({ header }) => {
	const [collapse, setCollapse] = React.useState(false)
	const size = UseWindowSize() // Viewport size hook
	const [parentName, setParentName] = React.useState(false)
	const [cartItems, dispatch] = React.useContext(CartContext) // Cart context
	const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext) // Wishlist context


	useEffect(() => {

		if (localStorage.getItem("cart")) {
			// If localStorage exists set cart items to cart context
			JSON.parse(localStorage.getItem("cart")).map((product) =>
				dispatch({ type: "add", payload: product })
			)
		}

		if (localStorage.getItem("wishlist")) {
			// If localStorage exists set wishlist items to wishlist context
			JSON.parse(localStorage.getItem("wishlist")).map((product) =>
				wishlistDispatch({ type: "add", payload: product })
			)
		}
		// Remove on production START -->
		else {
			// Set 6th, 7th & 8th product item to cart on demo
			initialProducts.slice(5, 8).map((product) => {
				addWishlistItem(product)
				wishlistDispatch({ type: "add", payload: product })
			})
		}
		// <-- END remove
	}, [])

	const onLinkClick = (parent) => {
		size.width < 991 && setCollapse(!collapse) // If viewport below 991px toggle collapse block
		setParentName(parent) // Set parent name for item parent higlight
	}
	return (
		<header
			className={`header ${header && header.absolute ? "header-absolute" : ""}`}
		>
			<Navbar
				expand="lg"
				style={{ zIndex: "11" }}
				bg={
					header && header.transparentNavbar
						? collapse
							? "white"
							: "transparent"
						: "white"
				}
				expanded={collapse}
				className={`border-0 ${header && header.transparentNavbar ? "shadow-0" : ""
					} px-lg-5 ${collapse ? "was-transparent was-navbar-light" : ""}`}
			>
				{/* LOGO */}
				<Link href="/" passHref>
					<Navbar.Brand>Maggie's EVs</Navbar.Brand>
				</Link>


				{/* MENU */}
				<Navbar.Collapse className="d-flex justify-content-between">

					<Nav className="mt-3 mt-lg-0" navbar>
						<Nav.Item>
							<Link href={"/listings"}>Listings</Link>
						</Nav.Item>
						<Nav.Item style={{ marginLeft: "20px" }}>
							<Link href={"/manage-products"}>Manage Products</Link>
						</Nav.Item>
					</Nav>


					{/* TOP USER ICONS */}
					<MyMainIcons className="d-none d-lg-block" sidebarRight />
					{/* END TOP USER ICONS */}
				</Navbar.Collapse>
				{/* END MENU */}
			</Navbar>
			{/* END NAV BAR */}
		</header>
	)
}

export default Header
