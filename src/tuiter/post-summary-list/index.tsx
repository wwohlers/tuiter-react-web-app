import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

function PostSummaryList() {
  return (
    <div className="list-group">
      {posts.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostSummaryList;
