import "./RegisterPage.css";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Navigate } from "react-router";

const REGISTER_URL = "/api/auth/register";

export default function RegisterPage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    setNewUser({
      ...newUser,
      [evt.target.name]: evt.target.value,
    });
    setErrorMessage(null);
  };

  const handleRegister = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        navigate("/");
      } else {
        const json = await response.json();
        setErrorMessage(json.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="register-page">
      <h1>Create New Account</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={newUser.username}
        onChange={handleInputChange}
        className={errorMessage ? "error" : ""}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={newUser.password}
        onChange={handleInputChange}
        className={errorMessage ? "error" : ""}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
      <br />
      <Link to="/login">Already have an account?</Link>
    </div>
  );
}
