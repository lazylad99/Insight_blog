import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInputHandle = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="register">
      <div className="container register-container form-container">
        <h2>Sign Up</h2>
        <form action="" className="form register-form">
          <p className="form-message">This is invalid mesage.</p>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandle}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandle}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandle}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandle}
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>

        <small>
          Already have an account? <Link to={"/login"}>Sign In</Link>
        </small>
      </div>
    </section>
  );
}
