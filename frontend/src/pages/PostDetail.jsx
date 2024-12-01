//Importing Components.....
import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";

//Importing Images....
import postDetailImage from "../assets/1.jpg";

export default function PostDetail() {
  return (
    <section>
      <div className="container PostDetail-container">
        <div className="postdetail-top">
          <PostAuthor />
          <div className="postdetail-buttons">
            <Link to={"/post/1/edit"} className="btn btn-sm btn-primary">
              Edit
            </Link>
            <Link to={"/posts/:id/Delete"} className="btn btn-sm btn-danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
        <div className="postdetail-image">
          <img src={postDetailImage} alt="" />
        </div>
        <div className="postdetail-para">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis eum beatae tenetur corrupti accusamus delectus totam
            sapiente, eveniet rem, at sed, ab ipsum doloribus atque odio! Velit
            illo cupiditate voluptate. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Perspiciatis eum beatae tenetur corrupti accusamus
            delectus totam sapiente, eveniet rem, at sed, ab ipsum doloribus
            atque odio! Velit illo cupiditate voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magni, molestias repellendus.
            Quos alias atque repudiandae numquam illo dicta ad fugit eius sunt
            pariatur! Explicabo doloremque vitae, repellendus numquam quisquam
            nesciunt.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis eum beatae tenetur corrupti accusamus delectus totam
            sapiente, eveniet rem, at sed, ab ipsum doloribus atque odio! Velit
            illo cupiditate voluptate.
          </p>
        </div>
      </div>
    </section>
  );
}
