import React from "react"
import {
	Container,
	Row,
	Col,
	Form,
	Button,
} from "react-bootstrap"
import { displayJsonContents } from "../../../my-tools/my-helper";
import MaggieAddedToCartAlert from "../../products/MaggieAddedToCartAlert";



export async function getServerSideProps(context) {

	const { editProductId } = context.params;

	// Fetch the product data using productId
	var response = await fetch("http://localhost:3003/products/" + editProductId);
	const data = await response.json();

	response = await fetch('http://localhost:3003/listings');
	const extraData = await response.json();


	return {
		props: {
			brands: extraData.brands,
			categories: extraData.categories,
			product: data.product
		}
	};
}



const EditProduct = (props) => {

	const [product, setProduct] = React.useState(props.product);
	const [alert, setAlert] = React.useState(false);
	const [errorAlert, setErrorAlert] = React.useState({ isVisible: false, msg: "Product Name is required." });


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

			const reqUrl = 'http://localhost:3003/products/' + product._id;
			const response = await fetch(reqUrl, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			});

			const data = await response.json();

			console.log("AFTER FETCH...");
			displayJsonContents(data);

			// Notify user of the result.
			if (data.isResultOk) {
				setAlert(true);
			} else {
				setErrorAlert({ isVisible: true, msg: data.error ?? "Error updating data." });
			}

		} catch (error) {
			setErrorAlert({ isVisible: true, msg: error?.message ?? "Error updating data." });
			console.error('Error updating data:', error?.message);
		}
	};



	return (
		<Container className="py-6">

			<div className="hero-content pb-6">
				<h1>Edit Product</h1>
			</div>

			<Row>

				<Col lg="8" xl="9" className="mb-5 mb-lg-0">

					<MaggieAddedToCartAlert visible={alert} setVisible={() => setAlert(false)} msg="Product Saved!" />
					<MaggieAddedToCartAlert visible={errorAlert.isVisible} setVisible={() => setErrorAlert({ ...errorAlert, isVisible: false })} msg={errorAlert.msg} variant="danger" />

					<Col md={8} className="mb-4">
						<h3>Product Info</h3>
					</Col>

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
							value={product?.quantity}
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

export default EditProduct;
