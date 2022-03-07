import Modal from "../UI/Modal";
import classes from "./AddUser.module.css";

import useInput from "../Hooks/use-input";

const AddUser = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredUrl,
    isValid: enteredUrlIsValid,
    hasError: urlInputHasError,
    valueChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
    reset: resetUrlInput,
  } = useInput((value) => value.includes("."));

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnterdNameTouched] = useState(false);

  // const [enteredUrl, setEnteredUrl] = useState("");
  // const [enteredUrlTouched, setEnteredUrlTouched] = useState(false);

  // const [formIsValid, setFormIsValid] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredUrlIsValid = enteredUrl.includes(".");
  // const enteredUrlIsInvalid = !enteredUrlIsValid && enteredUrlTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredUrlIsValid) {
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

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const urlInputChangeHandler = (event) => {
  //   setEnteredUrl(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnterdNameTouched(true);
  // };

  // const urlInputBlurHandler = (event) => {
  //   setEnteredUrlTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnterdNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // setEnteredName("");
    // setEnterdNameTouched(false);

    resetNameInput();
    resetUrlInput();

    // setEnteredUrl("");
    // setEnteredUrlTouched(false);
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
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            {nameInputHasError && (
              <p className={classes.errortext}>Name must not be empty!</p>
            )}
          </div>
          <div>
            <label htmlFor="url">Study Video</label>
            <input
              type="url"
              id="url"
              onChange={urlChangeHandler}
              onBlur={urlBlurHandler}
              value={enteredUrl}
            />
            {urlInputHasError && (
              <p className={classes.errortext}>Please enter a valid URL!</p>
            )}
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
            <button disabled={!formIsValid} className={classes.submitbutton}>
              Submit
            </button>
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
