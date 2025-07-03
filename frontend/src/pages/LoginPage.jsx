import "./LoginPage.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { UserContext } from "../providers/UserProvider";

const LOGIN_URL = "/api/auth/login";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleInputChange = (evt) => {
    setLoginData({
      ...loginData,
      [evt.target.name]: evt.target.value,
    });
    setErrorMessage(null);
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
        const { user } = await response.json();
        setUser(user);
        navigate("/");
      } else {
        const json = await response.json();
        setErrorMessage(json.message);
        setLoginData({
          username: "",
          password: "",
        });
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <form className="login-form">
        <h1>Login</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInputChange}
          value={loginData.username}
          className={errorMessage ? "error" : ""}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={loginData.password}
          className={errorMessage ? "error" : ""}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        <br />
        <Link to="/">Don't Have an account yet?</Link>
      </form>
    </div>
  );
}

export default LoginPage;
