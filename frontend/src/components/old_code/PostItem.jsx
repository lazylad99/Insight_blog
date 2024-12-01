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
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={Image} 
          alt={shortTitle}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-6">
        <Link 
          to={`/posts/categories/${category}`}
          className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors mb-4"
        >
          {category}
        </Link>
        <Link to={`/posts/${postId}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {shortTitle}
          </h3>
        </Link>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {shortDes}
        </p>
        <div className="border-t pt-4">
          <PostAuthor authorID={authorID} />
        </div>
      </div>
    </article>
  );
};