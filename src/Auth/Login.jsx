import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!email.trim()) {
      setEmailError("Please fill in your email.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError("Please fill in your password.");
    }
  };

  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="email"
          className="h-8 px-4 mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="text-red-500">{emailError}</div>}
        <br />
        <input
          type="text"
          placeholder="Password"
          className="h-8 px-4 mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div className="text-red-500">{passwordError}</div>}
        <br />
        <input
          type="submit"
          value="Sign in"
          className="h-8 px-4 bg-green-300 rounded-lg"
          onClick={handleLogin}
        />
      </div>
      <p className="mt-3">
        Already does not have an account?
        <span className="text-red-500">
          <Link to="/SignUp">Sign Up</Link>
        </span>
        <br />
        Forgot Password?
        <span className="text-red-500">
          <Link to="/Reset">Reset password</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
