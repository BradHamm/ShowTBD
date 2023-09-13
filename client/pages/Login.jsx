// login page for OAuth, which will route to ProfileConfig once username/email/password info is submitted
import React, { useState } from 'react';
import axios from 'axios';
// import bcryptUtil from '../../server/utils/bcryptUtil';
//bcrypt having issues - will comment out for the time being.
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {

      const hashedPassword = await  bcryptUtil.hashPassword(password);

      const response = await axios.post('/api/login', {
        username,
        password: hashedPassword,
      });

      const token = response.data.token;

      localStorage.setItem('token', token);

      // Redirect to homepage
      history.push('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;