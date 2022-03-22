import React from "react";
import styles from "./StudyVideo.module.css";

function StudyVideo() {
  return (
    <div className={styles.studyVideo}>
      <div className={styles.iframe}>
       <form action="action" method="post" target="output_frame">
          <input type="text"></input>
        </form>
        <iframe
          name="output_frame"
          id="output_frame"
          width="900"
          height="506"
          src="https://www.youtube.com/embed/EdtD6fjGjAk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default StudyVideo;
