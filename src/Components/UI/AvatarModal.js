import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import { imageArray } from "../../Utils/AvatarData";

import classes from "./AvatarModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const [selectedAvatar, setSelectedAvatar] = useState(false);

  const showSelectedAvatar = (id) => {
    setSelectedAvatar(true);
    // console.log(id);
    props.onSelectAvatar(id);
  };

  const hideSelectedAvatar = (id) => {
    setSelectedAvatar(false);
    props.onSelectAvatar(id);
  };

  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
      <h2>Pick Your Studdy Buddy</h2>
      <div className={classes.content}>
        {imageArray.map((each) => (
          <img
            onClick={() => showSelectedAvatar(each.id)}
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
          <button onClick={props.onClose}>Close with props</button>
          <button onClick={hideSelectedAvatar}>Remove Avatar</button>
        </div>
    </div>
  );
};

const AvatarModal = (props) => {
  const portalElement = props.modalRef.current;
  console.log(props.onSelectAvatar);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} onSelectAvatar={(id) => props.onSelectAvatar(id)}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default AvatarModal;
