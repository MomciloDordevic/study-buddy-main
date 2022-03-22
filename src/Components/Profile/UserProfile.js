import classes from "./UserProfile.module.css";
import { Link } from "react-router-dom";
import { imageArray } from "../../Utils/AvatarData";
import { useState } from "react";

const UserProfile = (props) => {

  const getAvatar = () => {
    const currentAvatar = imageArray.find(
      (image) => image.id === props.selectedAvatar
    );
    return <img src={currentAvatar?.image}></img>;
  };

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <div>
        <p>Your Avatars!</p>
        {getAvatar()}
      </div>
      <div>
        <p>Your Scores!</p>
      </div>
      <Link to="/profileform">
        <button>Change your password</button>
      </Link>
    </section>
  );
};

export default UserProfile;
