import React from "react"
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Dropdown,
} from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-regular-svg-icons"
import { displayJsonContents } from "../../my-tools/my-helper";


export async function getServerSideProps() {

	const response = await fetch('http://localhost:3003/listings');
	const data = await response.json();

	return {
		props: data
	};
}


const AddProduct = (props) => {

	const [product, setProduct] = React.useState({ 
		name: "", brand: "Tesla", category: "E-vehicle", price: 499.99, quantity: 0,
		imageLinks: ["beetle-1.jpg", "beetle-2.jpg", "beetle-3.jpg"]
	});


	const onChange = (e, productAttrib) => {
		const value = e.target.value
		setProduct({ ...product, [productAttrib]: value })

		console.log("productAttrib ==> " + productAttrib);
		console.log("productvalueAttrib ==> " + value);
	}



	const onSave = async () => {

		console.log("EVENT: onSave()");
		console.log("BEFORE FETCH...");
		displayJsonContents(product);


		try {

			const response = await fetch('http://localhost:3003/add-product', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			});

			const data = await response.json();

			console.log("AFTER FETCH...");
			displayJsonContents(data);

		} catch (error) {
			console.error('Error posting data:', error);
		}
	};



	return (
		<Container className="py-6">

			<div className="hero-content pb-6">
				<h1>Add a New Product</h1>
			</div>

			<Row>

				<Col lg="8" xl="9" className="mb-5 mb-lg-0">

					<Col md={8} className="mb-4">
						<Form.Label>Product Name</Form.Label>
						<Form.Control
							type="text"
							value={product.name}
							onChange={(e) => onChange(e, "name")}
						/>
					</Col>


					<Col md={8} className="mb-4">

						<Form.Label>Brand</Form.Label><br />

						<select className="p-1" value={product.brand} onChange={(e) => onChange(e, "brand")}>
							{props.brands.map((brand) => (
								<option value={brand.name} key={brand._id}>{brand.name}</option>
							))}
						</select>
					</Col>


					<Col md={8} className="mb-4">

						<Form.Label>Category</Form.Label><br />

						<select className="p-1" value={product.category} onChange={(e) => onChange(e, "category")}>
							{props.categories.map((c) => (
								<option value={c.name} key={c._id}>{c.name}</option>
							))}
						</select>
					</Col>


					<Col md={8} className="mb-4">
						<Form.Label>Price</Form.Label>
						<Form.Control
							type="number"
							value={product.price}
							onChange={(e) => onChange(e, "price")}
						/>
					</Col>


					<Col md={8} className="mb-4">
						<Form.Label>Quantity</Form.Label>
						<Form.Control
							type="number"
							value={product.quantity}
							onChange={(e) => onChange(e, "quantity")}
						/>
					</Col>



					<div className="mt-4 mb-4">
						<Button variant="dark" type="submit" onClick={onSave}>Save Product</Button>
					</div>
				</Col>



			</Row>
		</Container>
	)
}

export default AddProduct;
