import React from "react"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import Link from "next/link"

import products from "../../data/products-clothes.json"
import CardProduct from "../../components/CardProduct"

import Pagination from "../../components/Pagination"
import CategoryTopBar from "../../components/CategoryTopBar"
import CategoriesMenu from "../../components/CategoriesMenu"
import Filters from "../../components/Filters"



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



    // TODO:DELETE
    console.log("props ==> " + props.data);
    props.data.forEach(i => {
        console.log(`${i.name} ==> ${i.price} ==> ${i.description}`);
    });


    const [searchPhrase, setSearchPhrase] = React.useState("");
    const [products, setProducts] = React.useState(props.data);


    const onSearchBtnClick = async () => {
        try {
            const queryUrl = "http://localhost:3003/searchProducts?name=" + searchPhrase;
            const response = await fetch(queryUrl); 
            const data = await response.json();

            setProducts(data);
        } catch (error) {
            console.error('Error fetching cars data:', error);
        }
    };


    const searchComponentProps = {
        searchPhrase: searchPhrase,
        setSearchPhrase: setSearchPhrase,
        onSearchBtnClick: onSearchBtnClick
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
                    <Filters brands={props.brands} />
                </Col>

            </Row>


        </Container>
    )
}

export default CategorySidebar
