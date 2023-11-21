import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const OverlayModal = (props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.amount}</div>
        </div>
    );
}
const addedElement = document.getElementById('overlays');
const Modal = () =>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<OverlayModal></OverlayModal>,addedElement)}
        </Fragment>
    )
}
export default Modal;