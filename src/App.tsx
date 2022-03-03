import React, { useRef, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";
import StudyVideo from "./Components/StudyVideo/Container/StudyVideo";
import Header from "./Components/Layout/Container/Header";
import Timer from "./Components/Timer/Container.tsx/Timer";
import FormProvider from "./Components/Store/FormProvider";
import AuthForm from "./Components/Auth/AuthForm";
import ProfileForm from "./Components/Profile/ProfileForm";
import UserProfile from "./Components/Profile/UserProfile";
import AuthContext from "./Components/Store/AuthContext";

function App() {
  const [timeArray, setTimeArray] = useState<number[]>([0]);
  const modalRef = useRef<HTMLDivElement>(null);

  const authCtx = useContext(AuthContext);

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
          <Routes>
            {authCtx.isLoggedIn && (
              <Route path="/userprofile" element={<UserProfile />} />
            )}
            <Route path="/profileform" element={<ProfileForm />} />
            <Route path="/authform" element={<AuthForm />} />
          </Routes>
          {authCtx.isLoggedIn &&<div className={styles.contentContainer}>
            <h1>Study Session - ASMR with Eira</h1>
            <StudyVideo />
            <Timer timeArray={timeArray} />
          </div>}
        </div>
      </FormProvider>
    </div>
  );
}

export default App;
