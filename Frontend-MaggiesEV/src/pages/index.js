import React from "react"
import Link from "next/link"

import { Container, Row, Col, Card } from "react-bootstrap"

import NewArrivals from "../components/NewArrivals"
import Swiper from "../components/Swiper"

import data from "../data/index.json"
import products from "../data/products-clothes.json"

import Sale from "../components/Sale"
import OurHistory from "../components/OurHistory"
import Brands from "../components/Brands"
import Image from "../components/Image"

export async function getStaticProps() {
	return {
		props: {
			header: {
				absolute: true,
				transparentBar: true,
				transparentNavbar: true,
			},
			title: "Homepage",
		},
	}
}

const Index = () => {
	return (
		<React.Fragment>
			<div className="bg-gray-100 position-relative">
				<Container className="py-6">
					<Row>
						<Col sm="6" className="mb-5 mb-sm-0">
							<Card className="card-scale shadow-0 border-0 text-hover-gray-900 overlay-hover-light text-center">
								<div>
									<h1>TODO: Maggie's EVs - Homepage</h1>
								</div>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	)
}

export default Index
