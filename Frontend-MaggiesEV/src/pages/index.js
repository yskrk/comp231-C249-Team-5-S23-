import React from "react"
import Link from "next/link"

import { Container, Row, Col, Card } from "react-bootstrap"


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
							<h1>Coming on Iteration 3: Maggie's EVs - Homepage</h1>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	)
}

export default Index
