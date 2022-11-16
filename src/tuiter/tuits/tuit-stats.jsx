import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-row justify-content-between mt-2 w-75">
      <span className="mx-2">
        <i className="far fa-comment" />
        &nbsp;
        {tuit.replies}
      </span>
      <span className="mx-2">
        <i className="fa fa-retweet" />
        &nbsp;
        {tuit.retuits}
      </span>
      <div>
        Likes: {tuit.likes}
        <i
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
              })
            )
          }
          className="bi bi-heart-fill me-2 text-danger"
        ></i>
      </div>
      <div>
        Dislikes: {tuit.dislikes}
        <i
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1,
              })
            )
          }
          className="fas fa-thumbs-down me-2 text-danger"
        ></i>
      </div>
      <span className="mx-2">
        <i className="fa fa-share" />
      </span>
    </div>
  );
};

export default TuitStats;
