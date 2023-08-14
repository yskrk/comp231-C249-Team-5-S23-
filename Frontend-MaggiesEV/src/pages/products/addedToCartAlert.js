
import { Alert } from "react-bootstrap";
import Icon from "../../components/Icon";

const AddedToCartAlert = (props) => {

    return (
        <Alert
            variant="primary"
            className="d-flex align-items-center pe-3"
            role="alert"
            show={props.visible}
            onClose={() => props.setVisible(false)}
            closeVariant="white"
            dismissible>
            <Icon
                icon="checked-circle-1"
                className="d-none d-sm-block w-3rem h-3rem svg-icon-light flex-shrink-0 me-3"
            />Item added cart.
        </Alert>
    );

};


export default AddedToCartAlert