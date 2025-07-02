import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const LOGIN_URL = "/api/auth/login";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    setLoginData({
      ...loginData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleLogin = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.ok) {
        navigate("/");
      } else {
        setLoginData({
          username: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInputChange}
          value={loginData.username}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={loginData.password}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
