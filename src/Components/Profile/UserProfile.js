import classes from "./UserProfile.module.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <div>
        <p>Your Avatars!</p>
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
