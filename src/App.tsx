import React, { useRef, useState } from "react";
import styles from "./App.module.css";
import StudyVideo from "./Components/StudyVideo/Container/StudyVideo";
import Header from "./Components/Layout/Container/Header";
import Timer from "./Components/Timer/Container.tsx/Timer";
import FormProvider from "./Components/Store/FormProvider";
import AuthForm from "./Components/Auth/AuthForm";

function App() {
  const [timeArray, setTimeArray] = useState<number[]>([0]);
  const modalRef = useRef<HTMLDivElement>(null);

  const setScheduleArray = (value: number[]) => {
    setTimeArray(value);
  };

  return (
    <div>
      <div id="overlays" ref={modalRef}></div>
      <FormProvider>
        <div className={styles.app}>
          <div className={styles.headerContainer}>
            <Header modalRef={modalRef} />
          </div>
          <div className={styles.contentContainer}>
            <h1>Study Session - ASMR with Eira</h1>
            <StudyVideo />
            <AuthForm />
            <Timer timeArray={timeArray} />
          </div>
        </div>
      </FormProvider>
    </div>
  );
}

export default App;
