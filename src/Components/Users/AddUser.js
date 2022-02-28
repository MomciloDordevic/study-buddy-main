import React from "react";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="studyplan">Study Plan</label>
        <input id="studyplan" type="text" />
        <button type="submit">Add User</button>
        <button onClick={props.onClose}>Close</button>
      </form>
    </Modal>
  );
};

export default AddUser;
