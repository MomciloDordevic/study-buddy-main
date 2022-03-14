import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <Link to="/authform">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default LoginForm;
