import { Alert } from 'react-bootstrap'
import Icon from '../../components/Icon'

const MaggieAddedToCartAlert = (props) => {

    const msg = (props.msg ? props.msg : "Item added cart.");

    return (
        <Alert show={props.visible} onClose={() => props.setVisible(false)} variant={props.variant ?? "success"} className="d-flex align-items-center pe-3" dismissible>
            <Icon icon="checked-circle-1" className="d-none d-sm-block w-3rem h-3rem svg-icon-light flex-shrink-0 me-3" />{msg}

        </Alert>
    )
}

export default MaggieAddedToCartAlert