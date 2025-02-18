import React, { useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signupFormData, setSignupFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const handleSignupChange = (e) => {
    setSignupFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });

  };

  const handleSignupSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...signupFormData }),
      });
      console.log(response)
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        return;
      }
      navigate("/login")
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="signUp">
      <div className="signUp__wrapper">
        <h1>Sign-up</h1>
        <form className="signUp__inputEles">
          <input
            type="text"
            placeholder="FULL NAME"
            name={"fullName"}
            value={signupFormData.fullName}
            onChange={handleSignupChange}
          />
          <input
            type="text"
            placeholder="USER NAME"
            name={"userName"}
            value={signupFormData.userName}
            onChange={handleSignupChange}
          />
          <input
            type="email"
            placeholder="EMAIL"
            name={"email"}
            value={signupFormData.email}
            onChange={handleSignupChange}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            name={"password"}
            value={signupFormData.password}
            onChange={handleSignupChange}
          />
        </form>
        <div className="sigUp__btns">
          <button onClick={handleSignupSubmit}>SignUp</button>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
