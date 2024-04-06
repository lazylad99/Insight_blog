import "../Profile.css";
import ProfileImage from "../assets/a2.jpg";
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
  );
}
