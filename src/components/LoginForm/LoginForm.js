import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [evt.target.name]: evt.target.value,
    }));
    setError("");
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      navigate("/");
    } catch {
      setError("Log In Failed - Try Again");
    }
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
