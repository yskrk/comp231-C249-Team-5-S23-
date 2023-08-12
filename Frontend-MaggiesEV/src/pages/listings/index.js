import React, { useEffect } from "react"
import fetch from 'isomorphic-fetch'; // Import the fetch function

import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import Link from "next/link"

import products from "../../data/products-clothes.json"
import CardProduct from "../../components/CardProduct"

import Pagination from "../../components/Pagination"
import CategoryTopBar from "../../components/CategoryTopBar"
import CategoriesMenu from "../../components/CategoriesMenu"
import Filters from "../../components/Filters"
import { displayJsonContents } from "../../my-tools/my-helper";



export async function getServerSideProps() {

    // TODO: DELETE
    console.log("executing METHOD: getServerSideProps()..");


    const response = await fetch('http://localhost:3003/products');
    const data = await response.json();

    // Fetch brands
    const brandQueryResponse = await fetch('http://localhost:3003/brands');
    const brands = await brandQueryResponse.json();

    return {
        props: {
            data,
            brands: brands
        },
    };
}



const CategorySidebar = (props) => {

    const [searchPhrase, setSearchPhrase] = React.useState("");
    const [products, setProducts] = React.useState(props.data);
    const [brands, setBrands] = React.useState(props.brands);



    useEffect(() => {
        fetchFilteredProducts();
    }, [brands]); // Run the effect whenever 'brands' state changes



    const fetchFilteredProducts = () => {

        // Extract names of selected brands.
        const selectedBrands = [];
        brands.forEach(b => {
            if (b.isChecked) {
                selectedBrands.push(b.name);
            }
        });

        selectedBrands = selectedBrands.join(",");
        console.log("selected brands ==> " + selectedBrands);


        var queryUrl = "http://localhost:3003/searchProducts?name=" + searchPhrase;
        queryUrl += "&brands=" + selectedBrands;

        // Fetch JSON data from the API
        fetch(queryUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log("THE REPONSE DATA ==> ...");

                displayJsonContents(data);
                setProducts(data.products);
            })
            .catch((error) => console.error('Error fetching data:', error));

    };


    const onSearchBtnClick = () => {
        fetchFilteredProducts();
    };


    const searchComponentProps = {
        searchPhrase: searchPhrase,
        setSearchPhrase: setSearchPhrase,
        onSearchBtnClick: onSearchBtnClick
    };



    const onBrandCheckBoxChange = async (e) => {

        const name = e.target.name

        const updatedBrands = brands.map((b) => {
            if (b.name === name) {
                // Modify the isChecked property for the triggered brand.
                return { ...b, isChecked: !b.isChecked };
            }
            return b;
        });


        setBrands(updatedBrands);

    };



    return (
        <Container className="py-6">

            {/* Page Header Title */}
            <div className="hero-content pb-6">
                <h1>Maggie's EVs Listings</h1>
                <Row>
                    <Col xl="8">
                        <p className="lead text-muted">Find the EV you're looking for.</p>
                    </Col>
                </Row>
            </div>


            <Row>

                {/* Products */}
                <Col xl="9" lg="8" className="products-grid order-lg-2">
                    <CategoryTopBar searchComponentProps={searchComponentProps} />
                    <Row>
                        {products.map((product, index) => (
                            <Col key={index} xl="4" xs="6">
                                <CardProduct product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Pagination />
                </Col>

                {/* Filters                             */}
                <Col xl="3" lg="4" className="sidebar pe-xl-5 order-lg-1">
                    <CategoriesMenu />
                    <Filters brands={brands} onCheckBoxChange={onBrandCheckBoxChange} />
                </Col>

            </Row>


        </Container>
    )
}

export default CategorySidebar
