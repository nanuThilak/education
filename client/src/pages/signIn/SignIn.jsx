import React, { useState } from "react";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className="signIn">
      <div className="signIn__wrapper">
        <h1>Login</h1>
        <div className="signIn__inputEles">
          <input type="text" placeholder="EMAIL" />
          <input type="text" placeholder="PASSWORD" />
        </div>
        <div className="sigIn__btns">
          <Link to="/signUp">
            <button>SignUp</button>
          </Link>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
