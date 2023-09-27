import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import i18 from "../img/18.png";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [eror, seteror] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "") alert("Username is empty");
    else
      try {
        const response = await axios.post(
          "http://localhost:8000/api/tokenjwt",

          {
            username,
            password,
          },
          { withCredentials: true }
        );
        //localStorage.setItem("access", response.data);
        // console.log("heloo    ", response.data.access);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access}`;
        if (response.status == 200) navigate("/wl");
        seteror("");
      } catch (error) {
        console.error("Login error:", error);
        seteror(
          "Sorry, your password was incorrect. Please double-check your password."
        );
      }
  };

  return (
    <div className="container row">
      <div className="f">
        <img style={{ maxWidth: "50%" }} src={i18} alt="" />
        <form className="ff" onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div
              style={{ color: "white" }}
              id="emailHelp"
              className="form-text"
            >
              We'll never share your email with anyone else. ok 
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="empty-label">
          <span>{eror}</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
