const WhoToFollowListItem = (who) => {
  return `
                <div class="list-group-item d-flex flex-row">
                    <img class="avatar" src="../img/${who.avatarIcon}" />
                    <div class="flex-grow-1 ms-2">
                        <div class="fw-bold">
                            ${who.userName} <i class="fa fa-check-circle"></i>
                        </div>
                        <span class="label">@${who.handle}</span>
                    </div>
                    <button class="btn btn-primary custom-rounded align-self-center">
                        Follow
                    </button>
                </div>
        `;
};

export default WhoToFollowListItem;
