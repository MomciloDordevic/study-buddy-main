import React, { RefObject, useContext, useState } from "react";
import styles from "./Header.module.css";
import AddUser from "../../Users/AddUser";
import AuthContext from "../../Store/AuthContext";
import { Link } from "react-router-dom";

type Props = {
  modalRef: RefObject<HTMLDivElement>;
  onSelectAvatar: (id: number) => void;
  onSaveUserData: (enteredUserData: string[]) => void; // not an String array, its an object
};

function Header({ modalRef, onSelectAvatar }: Props) {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const saveUserDataHandler = (enteredUserData: Props) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    console.log(userData);
  };

  // const [userData, setUserData] = useState([]);

  // const saveUserDataHandler = (uName: string, uUrl: string) => {
  //   setUserData((prevUserData: string[]) => {
  //     return [
  //       ...prevUserData,
  //       { name: uName, age: uUrl, id: Math.random().toString() },
  //     ];
  //   });
  // };

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.newSession}>
          {isLoggedIn && (
            <button onClick={showFormHandler}>Start Session</button>
          )}
          {formIsShown && (
            <AddUser
              modalRef={modalRef}
              onClose={hideFormHandler}
              onSaveUserData={saveUserDataHandler}
              onSelectAvatar={(id: number) => onSelectAvatar(id)}
            />
          )}
        </div>
        <div className={styles.boxes}>
          {!isLoggedIn && (
            <Link to="/authform">
              <button>Login</button>
            </Link>
          )}
          {isLoggedIn && (
            <>
              <Link to="/">
                <button>
                  <i className="fas fa-home"></i>
                </button>
              </Link>
              <Link to="/userprofile">
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
              <button onClick={logoutHandler}>Logout</button>
              {/* <LoginForm />
              <Link to="/authform">
                <button>
                  Login
                </button>
              </Link> */}
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
