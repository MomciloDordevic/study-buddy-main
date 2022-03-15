import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import { imageArray } from "../../Utils/AvatarData";

import classes from "./AvatarModal.module.css";



const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const [selectedAvatar, setSelectedAvatar] = useState(false);

  const showSelectedAvatar = (event) => {
    setSelectedAvatar(true);
    console.log(event.target.value)
  };

  const hideSelectedAvatar = () => {
    setSelectedAvatar(false);
  };

  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
      <h2>Pick Your Studdy Buddy</h2>
      <div className={classes.content}>
        {imageArray.map((each) => (
          <img
            onClick={showSelectedAvatar}
            key={each.id}
            src={each.image}
            width="140"
            height="120"
            alt="Avatar Images"
          />
        ))}
        {/* <img src={image1} width="140" height="120" alt="" />
          <img src={image2} width="140" height="120" alt="" />
          <img src={image3} width="140" height="120" alt="" />
          <img src={image4} width="140" height="120" alt="" />
          <img src={image5} width="140" height="120" alt="" /> */}
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

const AvatarModal = (props) => {

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
