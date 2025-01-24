import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  return (
    <div>
      <h2>This is Login Page</h2>
      <form>
        <label>Username</label>
        <input
          placeholder="Enter Your Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          placeholder="Enter Your Username"
          type="text"
          value={password}
          onChange={(e) => setPassowrd(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
