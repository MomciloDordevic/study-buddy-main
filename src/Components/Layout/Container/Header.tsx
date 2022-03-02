import React, { RefObject, useEffect, useState } from "react";
import styles from "./Header.module.css";
import AddUser from "../../Users/AddUser";

type Props = {
  modalRef: RefObject<HTMLDivElement>;
};

function Header({ modalRef }: Props) {
  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.newSession}>
          <button onClick={showFormHandler}>Start Session</button>
          {formIsShown && (
            <AddUser modalRef={modalRef} onClose={hideFormHandler} />
          )}
        </div>
        <div className={styles.boxes}>
          <button>
            <i className="fas fa-user"></i>
          </button>
          <button>
            <i className="fas fa-tasks"></i>
          </button>
          <button>
            <i className="fas fa-clipboard-list"></i>
          </button>
          {/* <i className="fas fa-stopwatch"></i>
          <i className="fas fa-check"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
