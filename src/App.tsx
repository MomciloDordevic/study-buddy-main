import React, { useRef, useState, useContext } from "react";
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
import Card from "./Components/UI/Card";
import Button from "./Components/UI/Button";
import StudyVideo1 from "./Components/StudyVideo/Container/StudyVideo1";


function App() {
  const [timeArray, setTimeArray] = useState<number[]>([0]);
  const [usersData, setUsersData] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const authCtx = useContext(AuthContext);

  const setScheduleArray = (value: number[]) => {
    setTimeArray(value);
  };

  const onSelectAvatar = (id: number) => {
    setSelectedAvatar(id);

    console.log("App.tsx", id);
  };

  const saveUserDataHandler = (enteredUserData: string[]) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    console.log(userData);
  };

  // const saveUserDataHandler = (uName: string, uUrl: string) => {
  //   setUserData((prevUserData: string[]) => {
  //     return [
  //       ...prevUserData,
  //       { name: uName, age: uUrl, id: Math.random().toString() },
  //     ];
  //   });
  // };

  

  // const addUserHandler = (uName: any, uUrl: any) => {
  //   setUsersList((prevUsersList) => {
  //     return [
  //       ...prevUsersList,
  //       { name: uName, url: uUrl, id: Math.random().toString() },
  //     ];
  //   });
  // };

  const getAvatar = () => {
    const currentAvatar = imageArray.find(
      (image) => image.id === selectedAvatar
    );
    return <img src={currentAvatar?.image}></img>;
  };

  return (
    <div>
      <div id="overlays" ref={modalRef}></div>
      <FormProvider>
        <div className={styles.app}>
          <div className={styles.headerContainer}>
            <Header
              modalRef={modalRef}
              onSelectAvatar={onSelectAvatar}
              // {...saveUserDataHandler}
              onSaveUserData={saveUserDataHandler}
            />
          </div>
          {!authCtx.isLoggedIn && (
              <AuthForm />
            )}
          <Routes>
            {authCtx.isLoggedIn && (
              <Route path="/userprofile" element={<UserProfile onSelectedAvatar={onSelectAvatar}/>} />
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
                      <StudyVideo1 />
                      <StudyVideo />
                      <NewSession
                        onAddUser={saveUserDataHandler}
                        modalRef={modalRef}
                        users={usersData}
                        onSelectAvatar={onSelectAvatar}
                        onSaveUserData={saveUserDataHandler}
                      />
                      <Card>
                        <Button>
                        <h1>Welcome back!</h1>
                        </Button>
                      </Card>
                      {/* <StartedSession users={usersList} /> */}
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
