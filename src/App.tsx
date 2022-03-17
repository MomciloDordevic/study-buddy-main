import React, { useRef, useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import StudyVideo from "./Components/StudyVideo/Container/StudyVideo";
import Header from "./Components/Layout/Container/Header";
import Timer from "./Components/Timer/Container.tsx/Timer";
import FormProvider from "./Components/Store/FormProvider";
import AuthForm from "./Components/Auth/AuthForm";
import ProfileForm from "./Components/Profile/ProfileForm";
import UserProfile from "./Components/Profile/UserProfile";
import AuthContext from "./Components/Store/AuthContext";
import NewTimer from "./Components/Timer/Container.tsx/NewTimer";
import NewNewTimer from "./Components/Timer/Container.tsx/NewNewTimer";
import NewSession from "./Components/NewSession/NewSession";
import { imageArray } from "./Utils/AvatarData";

function App() {
  const [timeArray, setTimeArray] = useState<number[]>([0]);
  const [selectedAvatar, setSelectedAvatar] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const authCtx = useContext(AuthContext);

  const setScheduleArray = (value: number[]) => {
    setTimeArray(value);
  };


  const onSelectAvatar = (id: number) => {
    setSelectedAvatar(id);

    console.log("App.tsx", id)
  }

  

  //  const [userData, setUserData] = useState([]);

  // const saveUserDataHandler = (uName: string, uUrl: string) => {
  //   setUserData((prevUserData: string[]) => {
  //     return [
  //       ...prevUserData,
  //       { name: uName, age: uUrl, id: Math.random().toString() },
  //     ];
  //   });
  // };

  const getAvatar = () => {
    const currentAvatar = imageArray.find(image => image.id === selectedAvatar)
    return (
      <img src={currentAvatar?.image}></img>
    )
  }
  

  return (
    <div>
      <div id="overlays" ref={modalRef}></div>
      <FormProvider>
        <div className={styles.app}>
          <div className={styles.headerContainer}>
            <Header modalRef={modalRef} onSelectAvatar={onSelectAvatar}/>
          </div>
          <Routes>
            {authCtx.isLoggedIn && (
              <Route path="/userprofile" element={<UserProfile />} />
            )}
            <Route path="/profileform" element={<ProfileForm />} />

            <Route path="/authform" element={<AuthForm />} />
            <Route
              path="/"
              element={
                <React.Fragment>
                  {authCtx.isLoggedIn && (
                    <div className={styles.contentContainer}>
                      <h1>Study Session - ASMR with Eira</h1>
                      <StudyVideo />
                      <NewSession modalRef={modalRef} user={[]} onSelectAvatar={onSelectAvatar} />
                      {getAvatar()}
                      <Timer timeArray={timeArray} />
                      <NewNewTimer />
                      <NewTimer />
                    </div>
                  )}
                </React.Fragment>
              }
            ></Route>
          </Routes>
        </div>
      </FormProvider>
    </div>
  );
}

export default App;
