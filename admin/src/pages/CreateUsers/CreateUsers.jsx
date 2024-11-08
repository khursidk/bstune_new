import React, { useState } from "react";
import axios from "axios";
import createUser from "./CreateUser.module.css";

const CreateUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" }); // Clear previous messages

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/register`, {
        name,
        email,
        password,
      });

      setMessage({ text: response.data.message, type: "success" });
      setName("");
      setEmail("");
      setPassword("");
      
      // Clear the message after 3 seconds
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    } catch (error) {
      const errorMsg = error.response?.status === 409
        ? "Email is already registered"
        : "Error in registering user";
      setMessage({ text: errorMsg, type: "error" });

      // Clear the message after 3 seconds
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  return (
    <>
      <h2 className={createUser.heading}>Create User Account</h2>
      {message.text && (
        <p className={message.type === "success" ? createUser.success : createUser.error}>
          {message.text}
        </p>
      )}
      <form className={createUser.form_create} onSubmit={handleSubmit}>
        <label htmlFor="username" className={createUser.labels}>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email" className={createUser.labels}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className={createUser.labels}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div>
          <button className={createUser.userBtn} type="submit">
            Create User
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateUsers;
