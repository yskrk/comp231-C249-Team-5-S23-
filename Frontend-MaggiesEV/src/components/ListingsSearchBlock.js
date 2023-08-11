import React from "react"
import { Form, InputGroup, Button } from "react-bootstrap"
import Icon from "./Icon"



export default function ListingsSearchBlock(props) {
    return (
        <Form className="d-lg-flex w-100 ms-auto me-lg-5 me-xl-6 my-4 my-lg-0">
            <InputGroup className="input-group-underlined">
                <Form.Control
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    className="form-control-underlined ps-3"
                    value={props.searchComponentProps.searchPhrase}
                    onChange={(e) => props.searchComponentProps.setSearchPhrase(e.target.value)}
                />
                <Button
                    variant="underlined"
                    className="ms-0"
                    aria-label="search button"
                    onClick={props.searchComponentProps.onSearchBtnClick}
                >
                    <Icon className="navbar-icon" icon="search-1" />
                </Button>
            </InputGroup>
        </Form>
    )
}
