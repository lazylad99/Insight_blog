import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <ul className="footer-categories">
          <li>
            <Link to={"posts/categories/:Agriculture"}>Agriculture</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Art"}>Art</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Business"}>Business</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Education"}>Education</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Entertainment"}>Entertainment</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Fashion"}>Fashion</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Food"}>Food</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Music"}>Music</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Science"}>Science</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Sports"}>Sports</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Technology"}>Technology</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Weather"}>Weather</Link>
          </li>
          <li>
            <Link to={"posts/categories/:Weather"}>Other</Link>
          </li>
        </ul>

        <div className="footer-copyright">
          <small>
            {" "}
            &copy; Copyright All Rights Reserved ||{" "}
            <a href="https://lazylad99.netlify.app/">@lazy_lad</a>{" "}
          </small>
        </div>
      </div>
    </footer>
  );
}
