//Importing Author Data...........
import { Link } from "react-router-dom";
import { DummyAuthor } from "../data/data";
import { useState } from "react";

export default function Author() {
  const [author, setAuthor] = useState(DummyAuthor);
  return (
    <section className="author"> 
      <h1 className="error-center">Authors You Follow</h1>
        {author.length > 0 ? <div className="container author-container"> 
        {
          author.map(({ id, Image, name, posts }, index) => {
            return (
              <Link
                to={`/posts/user/${id}`}
                key={index}
                className="author-avatar"
              >
                <div className="author-image">
                  <img src={Image} alt="" />
                </div>
                <div className="author-info">
                  <h4>{name} </h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })
 } </div> : (
          <h2 className="error-center">User Not Found.</h2>
        )}
    </section>
  );
}
