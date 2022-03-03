import React, { useRef } from "react";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    console.log(event.target[1].value);
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData.get("username"));

    props.setScheduleArray(formData.get("timer"));
  };

  return (
    <Modal modalRef={props.modalRef} onClose={props.onClose}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" />
        <label htmlFor="studyplan">Study Plan</label>
        <input id="studyplan" type="text" />
        <label htmlFor="avatar">Chose Your Studdy Buddy!</label>
        <input id="avatar" type="color" />
        <label htmlFor="timer">Set Timer</label>
        <input id="timer" type="time" name="timer" />
        <button type="submit">Start Session</button>
        <button onClick={props.onClose}>Close</button>
      </form>
    </Modal>
  );
};

export default AddUser;
