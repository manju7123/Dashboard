import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

const Login = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (email && password) {
      onLogin();
      navigate('/'); 
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Email:
          <input 
            type="email" 
            className="login-input" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label className="login-label">
          Password:
          <input 
            type="password" 
            className="login-input" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
