import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username && !password) {
      setMessage('Please enter username and password');
    } else if (!username) {
      setMessage('Please enter username');
    } else if (!password) {
      setMessage('Please enter password');
    } else {
      setMessage('Login successful');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
};

export default Login;