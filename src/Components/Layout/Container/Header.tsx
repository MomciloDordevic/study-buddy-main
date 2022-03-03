import React, { RefObject, useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import AddUser from "../../Users/AddUser";
import AuthContext from "../../Store/AuthContext";
import {BrowserRouter,
Routes,
Route,
Link
} from "react-router-dom";
import ProfileForm from "../../Profile/ProfileForm";

type Props = {
  modalRef: RefObject<HTMLDivElement>;
};

function Header({ modalRef }: Props) {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

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
          {!isLoggedIn && <button>Login</button>}
          {isLoggedIn && (
            <><Link to="/profile">
              <button>
                <i className="fas fa-user"></i>
              </button>
              </Link>
              <button>
                <i className="fas fa-tasks"></i>
              </button>
              <button>
                <i className="fas fa-clipboard-list"></i>
              </button>
            </>
          )}
          {/* <i className="fas fa-stopwatch"></i>
          <i className="fas fa-check"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
