import PostItem from "./PostItem";

export default function PostsList({ posts, cont_name }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl font-semibold text-gray-600">No Posts Found</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
}
