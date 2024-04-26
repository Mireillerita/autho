import React, { useState } from "react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    let isValid = true;

    // Full Name Validation
    if (!fullName.trim()) {
      setFullNameError("Please enter full name");
      isValid = false;
    } else {
      setFullNameError("");
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Incorrect email");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password Validation
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Create a strong password (at least 6 characters with numbers, uppercase, lowercase, and symbols)"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log("Form submitted successfully");
    } else {
      setFormError("Please fill in the information");
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-red-600 font-bold">SIGN UP</h1>
      {formError && <div className="text-red-600">{formError}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mt-5 flex flex-col gap-5">
          <div>
            <input
              type="text"
              id="names"
              placeholder="Full names"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700 ${
                fullNameError && "border-red-500"
              }`}
            />
            {fullNameError && (
              <span className="text-red-600">{fullNameError}</span>
            )}
          </div>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700 ${
                emailError && "border-red-500"
              }`}
            />
            {emailError && <span className="text-red-600">{emailError}</span>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700 ${
                passwordError && "border-red-500"
              }`}
            />
            {passwordError && (
              <span className="text-red-600">{passwordError}</span>
            )}
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700 ${
                confirmPasswordError && "border-red-500"
              }`}
            />
            {confirmPasswordError && (
              <span className="text-red-600">{confirmPasswordError}</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-300 mx-9 py-2 rounded-md text-white w-[80%] border border-blue-700"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
