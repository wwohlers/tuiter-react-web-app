const PostSummaryItem = (post) => {
  return `
        <div class="list-group-item d-flex flex-row p-2">
            <div class="flex-grow-1">
                <div class="label">${post.topic}</div>
                <div>
                    <span class="fw-bold">${post.userName}</span>
                    <i class="fa fa-check-circle"></i>
                    <span class="label"> - ${post.time}</span>
                </div>
                <div class="fw-bold">${post.title}</div>
            </div>
            <img
                    class="thumbnail flex-shrink-0 rounded"
                    src="../img/${post.image}"
                    alt="image"
            />
        </div>
    `;
};

export default PostSummaryItem;
