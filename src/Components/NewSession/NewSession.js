import React from "react";
import { useState } from "react"

import AddUser from "../Users/AddUser";

const NewSession = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString()
    };
    props.onSaveUserData(userData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div>
      {!isEditing && <button onClick={startEditingHandler}>Testing</button>}
      {isEditing && <AddUser onSaveUserData={saveUserDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewSession;