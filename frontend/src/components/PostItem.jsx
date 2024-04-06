import PostAuthor from "./PostAuthor";
import { Link } from "react-router-dom";

export default function PostItem({
  postId,
  Image,
  authorID,
  category,
  title,
  des,
}) {
  const shortTitle = title.length > 60 ? title.substr(0, 30) + "..." : title;
  const shortDes = des.length > 60 ? des.substr(0, 145) + "..." : des;

  return (
    <article className="post">
      <div className="post-image">
        <img src={Image} alt="" />
      </div>
      <div className="post-content">
        <Link to={`/posts/${postId}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDes} </p>
        <div className="post-footer">
          <PostAuthor />
          <Link
            to={`/posts/categories/${category}`}
            className="btn btn-category"
          >
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
}
