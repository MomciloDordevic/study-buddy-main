import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./AvatarModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
      <a href="">
        <div class="image">
          <img url="../../Assets/Avatars/1.png" width="100" height="100" alt=""></img>
        </div>
      </a>
    </div>
  );
};

const AvatarModal = (props) => {
  console.log(props.modalRef);

  const portalElement = props.modalRef.current;

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default AvatarModal;
