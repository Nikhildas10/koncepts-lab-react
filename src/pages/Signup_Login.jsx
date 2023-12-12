import React, { useEffect, useState } from "react";
import "../App.css";
import personImg from "../assets/person.png";
import emailImg from "../assets/email.png";
import PassImg from "../assets/password.png";
import axios from "axios";
import { userApi } from "../api/usersApi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignupLogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const getUser = async () => {
    const result = await axios.get(userApi);
    setUser(result.data);
  };
  const getInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const login = () => {
    const matchFound = user.some(
      (i) => i.email === input.email && i.password === input.password
    );

    if (matchFound) {
      toast.success("Successfully logged in!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error("Invalid email or password");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div style={{ display: "grid", placeContent: "center", height: "100vh" }}>
      <div className="loginMain">
        <h1>Log in</h1>
        <div className="inputs">
          <div className="input">
            {" "}
            <img src={emailImg} alt="" />
            <input
              onChange={(e) => getInput(e)}
              placeholder="Email"
              name="email"
              type="mail"
            />
          </div>
          <div className="input">
            <img src={PassImg} alt="" />
            <input
              onChange={(e) => getInput(e)}
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>{" "}
        </div>
        <div className="loginBut ">
          <button onClick={() => login()} className="Login">
            Login{" "}
          </button>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SignupLogin;
