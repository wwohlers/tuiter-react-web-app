import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return `
           <ul class="list-group">
                <div class="list-group-item">
                    <span class="fw-bold">Who to follow</span>
                </div>
                ${who.map((who) => WhoToFollowListItem(who)).join("")}
           </ul>
`;
};

export default WhoToFollowList;
