import React, { useState } from "react";
import Modal from "../UI/Modal";

import AddUser from "./AddUser";
import UsersList from "./UsersList";

function UserData (props) {
  const [usersList, setUserslist] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserslist((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} modalRef={props.modalRef}/>
      <UsersList users={usersList} />
    </>
  );
}

export default UserData;