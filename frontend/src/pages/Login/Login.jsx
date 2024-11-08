import React, { useState } from 'react';
import axios from "axios";
import login from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/login`, {
        name,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        console.log('Logged in successfully');
        setAlert({ type: 'success', message: 'Logged in successfully!' });
        setTimeout(() => setAlert({ type: '', message: '' }), 2000); 
        navigate("/dashboard/userDashboard");
      }

      // Clear form fields
      setName("");
      setPassword("");
    } catch (error) {
      console.error('Error in login:', error.response || error.message);
      setAlert({ type: 'error', message: error.response?.data?.message || 'Login failed. Please try again.' });
      setTimeout(() => setAlert({ type: '', message: '' }), 2000); // Clear message after 2 seconds
    }
  };

  return (
    <div>
      <section className={login.section}>
        <div className={login.form_box}>
          <div className={login.form_value}>
            <form id="loginForm" onSubmit={handleSubmit}>
              <h2 className={login.heading}>Login</h2>
              <div className={login.inputbox}>
                <ion-icon name="mail-outline"></ion-icon>
                <input 
                  type="text" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
                <label htmlFor="">User Name</label>
              </div>
              <div className={login.inputbox}>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <label htmlFor="">Password</label>
              </div>
              <div className={login.forget}>
                <label>
                  <a href="#">Forget password?</a>
                </label>
              </div>
              <button className={login.btn}>Log in</button>
            </form>
            {alert.message && (
              <Alert severity={alert.type} style={{ marginTop: '1rem' }}>
                {alert.message}
              </Alert>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
