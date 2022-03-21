import React from "react";
import { useState } from "react";

import AddUser from "../Users/AddUser";
import classes from "./NewSession.module.css";

const NewSession = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onSaveUserData(userData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={classes.users}>
      {!isEditing && (
        <button type="submit" onClick={startEditingHandler}>
          New Session
        </button>
      )}
      {isEditing && (
        <AddUser
          modalRef={props.modalRef}
          onSelectAvatar={props.onSelectAvatar}
          onSaveUserData={saveUserDataHandler}
          onClose={stopEditingHandler}
        />
      )}
      <div>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.url}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default NewSession;
