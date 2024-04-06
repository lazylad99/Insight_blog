<<<<<<< HEAD:frontend/src/pages/UpdateProfile.jsx
import "../Profile.css";
import ProfileImage from "../assets/a2.jpg";
<<<<<<<< HEAD:frontend/src/pages/UpdateProfile.jsx
=======
import { Link } from "react-router-dom";
import ProfileImage from "../assets/a2.jpg";
>>>>>>> d73d8b01018d5c87a3de9878577ae765b4661ae3:vite-project/frontend/src/pages/UpdateProfile.jsx
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function UpdateProfile() {
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={"/myposts/id"}>My Posts</Link>

        <div className="profile-details form-container">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={ProfileImage} alt="" />
            </div>
            {/* profile_form */}
            <form action="" className="profile-image-form">
              <input
                type="file"
                name="profile-image"
                id="profile-image"
                value={profileImage}
                accept="png, jpg, jpeg"
                onChange={(e) => setProfileImage[0]}
              />
              {/* <label htmlFor="profile-image">
                <FaEdit />
              </label> */}
            </form>
            <button className="profile-image-btn">
              <FaCheckCircle />
            </button>
          </div>

          <h2>Profile</h2>


          {/* profile_form_data */}
          <form action="" className="form profile-data-form">
          <p className="form-message">This is invalid mesage.</p>
        
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Current Password"
            name="currentPassword"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </form>

      
        </div>
<<<<<<< HEAD:frontend/src/pages/UpdateProfile.jsx
========
import Dashboard from "./Dashboard";

export default function UserProfile() {
  return (
    <div className="card-container">
      <div className="image-section">
        <img className="round" src={ProfileImage} alt="user" />
      <h3>Alok Deep</h3>
      <h6>Student</h6>
      <p>MCA</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary ghost">Following</button>
>>>>>>>> d73d8b01018d5c87a3de9878577ae765b4661ae3:vite-project/frontend/src/pages/UserProfile.jsx
      </div>
      </div>
      
      <div className="info">
        <div>
          <h4 className="card-label">Scholar No. : </h4>
          <p className="card-info">23146002</p>
        </div>
        <div><h4 className="card-label">Email Id : </h4>
        <p className="card-info">alokdeep9925@gmail.com</p></div>
        <div><h4 className="card-label">Interest : </h4>
        <ul>
          <li>Business</li>
          <li>Technology</li>
          <li>Food</li>
        </ul></div>
      </div>
          {/* <div className="post-section">
            <Dashboard />
          </div> */}
    </div>
=======
      </div>
    </section>
>>>>>>> d73d8b01018d5c87a3de9878577ae765b4661ae3:vite-project/frontend/src/pages/UpdateProfile.jsx
  );
}


