import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './signup.css';

function Signup() {
  const [uniqueId, setUniqueId] = useState(""); // ✅ Allow user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send user-entered uniqueId to backend
    axios
      .post("http://localhost:3001/register", { uniqueId, name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded w-25">
        <h2 className="text-center">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* Unique ID (User-Input) */}
          <div className="mb-3">
            <label htmlFor="uniqueId">
              <strong>Unique ID</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Unique ID" // ✅ Now users enter their own ID
              name="uniqueId"
              className="form-control rounded-0"
              onChange={(e) => setUniqueId(e.target.value)}
              required
            />
          </div>

          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign Up
          </button>
        </form>

        <p className="mt-2 text-center">Already have an account?</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none text-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
