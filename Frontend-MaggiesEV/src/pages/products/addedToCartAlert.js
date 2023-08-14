import React from "react"

const addedToCartAlert = () => {

    return (
        < div className="d-block" id="addToCartAlert" >
            <Alert
                variant="success"
                className="mb-4 mb-lg-5  opacity-10"
                role="alert"
                show={alert}
                onClose={() => setAlert(false)}
                closeVariant="white"
                dismissible
            >
                <div className="d-flex align-items-center pe-3">

                    <Icon
                        icon="checked-circle-1"
                        className="d-none d-sm-block w-3rem h-3rem svg-icon-light flex-shrink-0 me-3"
                    />

                    <p className="mb-0">
                        Push-up jeans have been added to your cart.
                        <br className="d-inline-block d-lg-none" />
                        <Link href="/cart">
                            <a className="text-reset text-decoration-underline ms-lg-3">
                                View Cart
                            </a>
                        </Link>
                    </p>

                </div>
            </Alert>
        </div >
    );

};


export default addedToCartAlert