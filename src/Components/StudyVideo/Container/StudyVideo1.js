import styles from "./StudyVideo.module.css";
import { useState } from "react";

function StudyVideo1() {
  const [inputValue, setInputValue] = useState("");
  const [srcValue, setSrcValue] = useState("");

  const setSrc = () => {
    const idArray = inputValue.split("=");
    const id = idArray[1] && idArray[1];
    console.log(id);
    setSrcValue(id);
  };

  const onInputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.studyVideo}>
      <div className={styles.iframe}>
        <form>
          Enter URL:
          <input
            type="text"
            id="txtSRC"
            onChange={(event) => onInputChangeHandler(event)}
            value={inputValue}
          />
          <input type="button" value="GO" onClick={setSrc} />
        </form>
        <iframe
          id="myIframe"
          src={`https://www.youtube.com/embed/${srcValue}`}
          target="_parent"
          width="900"
          height="506"
          frameBorder="0"
          marginWidth="0"
          scrolling="yes"
        ></iframe>
      </div>
    </div>
  );
}

export default StudyVideo1;
