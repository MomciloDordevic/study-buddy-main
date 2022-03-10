import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import image1 from "../../Assets/Avatars/1.png";
import image2 from "../../Assets/Avatars/2.png";
import image3 from "../../Assets/Avatars/3.png";
import image4 from "../../Assets/Avatars/4.png";
import image5 from "../../Assets/Avatars/5.png";
import image6 from "../../Assets/Avatars/6.png";
import image7 from "../../Assets/Avatars/7.png";
import image8 from "../../Assets/Avatars/8.png";
import image9 from "../../Assets/Avatars/9.png";
import image10 from "../../Assets/Avatars/10.png";
import image11 from "../../Assets/Avatars/11.png";
import image12 from "../../Assets/Avatars/12.png";

import classes from "./AvatarModal.module.css";

const imageList = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const [selectedAvatar, setSelectedAvatar] = useState(false);

  const showSelectedAvatar = () => {
    setSelectedAvatar(true);
  };

  const hideSelectedAvatar = () => {
    setSelectedAvatar(false);
  };

  return (
    <div className={classes.modal}>
      <h2>Pick Your Studdy Buddy</h2>
      <div>{props.children}</div>
      <div className={classes.content}>
        {imageList.map((each, i) => (
          <img
            key={i}
            src={each}
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
