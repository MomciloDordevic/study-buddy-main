import { Fragment } from "react";
import ReactDOM from "react-dom";

import image from '../../Assets/Avatars/1.png';
import classes from "./AvatarModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <h2>Pick Your Studdy Buddy</h2>
      <div>{props.children}</div>
        <div className={classes.content}>
          <img src={image} width="130" height="120" alt="Testing" />
          <img src="" width="130" height="120" alt="Testing"></img>
          <img src="./1.png" width="130" height="120" alt="Testing"></img>
          <img src="Assets/Avatars/1.png" width="130" height="120" alt="Testing" />
          <img src="http://localhost:3577/static/media/1.d31d459d.png" width="130" height="120" alt="Testing" />
          <img src="src/Assets/Avatars/1.png" width="130" height="120" alt="Testing" />
          <img src="../../Assets/Avatars/1.png" width="130" height="120" alt="Testing" />
          <img src="/Assets/Avatars/1.png" width="130" height="120" alt="Testing"></img>
          <div>
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
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
