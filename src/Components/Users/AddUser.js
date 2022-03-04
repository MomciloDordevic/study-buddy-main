import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnterdNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     // && enteredStudyVideoIsValid
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]); // , enteredStudyVideoIsValid

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnterdNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnterdNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnterdNameTouched(false);
  };

  // const addUserHandler = (event) => {
  //   console.log(event.target[1].value);
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   console.log(formData.get("username"));

  //   props.setScheduleArray(formData.get("timer"));
  // };

  return (
    <Modal modalRef={props.modalRef} onClose={props.onClose}>
      <form onSubmit={formSubmissionHandler}>
        <div className={classes.formcontrol}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            />
            {nameInputIsValid && (
              <p className={classes.errortext}>Name must not be empty!</p>
            )}
          </div>
          <div>
            <label htmlFor="url">Study Video</label>
            <input
              type="url"
              id="url"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
            />
            {nameInputIsValid && (
              <p className={classes.errortext}>Please enter a valid URL!</p>
            )}
          </div>
          <div>
            <label htmlFor="name">Study Video URL:</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="name">Chose Your Studdy Buddy</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="name">Schedule Timer</label>
            <input type="time" id="name" />
          </div>
          <div>
            <button disabled={!formIsValid} className={classes.submitbutton}>Submit</button>
          </div>
          <div>
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddUser;
