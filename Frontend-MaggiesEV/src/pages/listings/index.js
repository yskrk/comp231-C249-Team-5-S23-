import React, { useEffect } from "react"
import fetch from 'isomorphic-fetch'; // Import the fetch function

import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import Link from "next/link"

import CardProduct from "../../components/CardProduct"

import Pagination from "../../components/Pagination"
import CategoryTopBar from "../../components/CategoryTopBar"
import CategoriesMenu from "../../components/CategoriesMenu"
import Filters from "../../components/Filters"
import { displayJsonContents } from "../../my-tools/my-helper";



export async function getServerSideProps() {

    // TODO: DELETE
    console.log("executing METHOD: getServerSideProps()..");


    // TODO: Make these as one request.
    const response = await fetch('http://localhost:3003/products');
    const products = await response.json();


    // Fetch brands
    const brandQueryResponse = await fetch('http://localhost:3003/brands');
    const brands = await brandQueryResponse.json();

    const categoryQueryResponse = await fetch('http://localhost:3003/categories');
    const categories = await categoryQueryResponse.json();

    const priceRangeQueryResponse = await fetch('http://localhost:3003/productsPriceRange');
    const priceRange = await priceRangeQueryResponse.json();



    brands.forEach((b) => {
        b.isChecked = true;
    });

    categories.forEach((c) => {
        c.isChecked = true;
    });


    return {
        props: {
            products: products,
            brands: brands,
            categories: categories,
            priceRange: priceRange
        },
    };
}



const CategorySidebar = (props) => {

    const [searchPhrase, setSearchPhrase] = React.useState("");
    const [products, setProducts] = React.useState(props.products);
    const [brands, setBrands] = React.useState(props.brands);
    const [categories, setCategories] = React.useState(props.categories);
    const [priceRange, setPriceRange] = React.useState(props.priceRange);


    useEffect(() => {
        fetchFilteredProducts();
    }, [brands, categories]); // Run the effect whenever 'brands' and 'categories' states changes



    const fetchFilteredProducts = () => {

        // Extract names of selected brands.
        const selectedBrands = [];
        brands.forEach(b => {
            if (b.isChecked) {
                selectedBrands.push(b.name);
            }
        });


        // Extract names of selected categories.
        const selectedCategories = [];
        categories.forEach(c => {
            if (c.isChecked) {
                selectedCategories.push(c.name);
            }
        });


        console.log("searchPhrase ==> " + searchPhrase);

        selectedBrands = selectedBrands.join(",");
        console.log("selected brands ==> " + selectedBrands);

        selectedCategories = selectedCategories.join(",");
        console.log("selectedCategories ==> " + selectedCategories);


        // Set query url.
        var queryUrl = "http://localhost:3003/searchProducts?name=" + searchPhrase;
        queryUrl += "&brands=" + selectedBrands;
        queryUrl += "&categories=" + selectedCategories;
        queryUrl += "&minPrice=" + priceRange.minPrice;
        queryUrl += "&maxPrice=" + priceRange.maxPrice;

        console.log("queryUrl ==> " + queryUrl);
        

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



    const onCheckBoxChange = async (e, filterType) => {

        const options = (filterType == "brand" ? brands : categories);

        const name = e.target.name

        const updatedOptions = options.map((o) => {
            if (o.name === name) {
                // Modify the isChecked property for the triggered checkbox.
                return { ...o, isChecked: !o.isChecked };
            }
            return o;
        });


        if (filterType == "brand") {
            setBrands(updatedOptions);
        } else {
            setCategories(updatedOptions);
        }

    };



    const onPriceFilterChange = (values) => {

        setPriceRange({
            minPrice: values.min,
            maxPrice: values.max
        });

        fetchFilteredProducts();

    }



    const filterComponentProps = {
        brands: brands,
        categories: categories,
        priceRange: priceRange,
        onCheckBoxChange: onCheckBoxChange,
        onPriceFilterChange: onPriceFilterChange
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
                    <Filters filterComponentProps={filterComponentProps} />
                </Col>

            </Row>


        </Container>
    )
}

export default CategorySidebar
