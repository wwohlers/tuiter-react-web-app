import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";

function PostSummaryList() {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  return (
    <div className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostSummaryList;
