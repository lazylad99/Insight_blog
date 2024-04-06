import PostItem from "./PostItem";

export default function PostsList({ posts, cont_name }) {
  return (
    <>
      {posts.length > 0 ? (
        <div className={`container ${cont_name}-container`}>
          {posts.map((post, index) => (
            <PostItem
              key={index}
              Image={post.Image}
              category={post.category}
              authorId={post.authorId}
              title={post.title}
              des={post.des}
              postId={post.id}
            />
          ))}
        </div>
      ) : (
        <h2 className="error-center">No Posts Found.</h2>
      )}
    </>
  );
}
