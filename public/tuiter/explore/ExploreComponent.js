import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return `
            <div class="d-flex flex-row align-items-center gx-2">
                <div class="input-group flex-grow-1">
              <span
                      class="input-group-text custom-rounded"
                      style="background: white; border-right: none; color: gray"
              >
                <i class="fa fa-search"></i>
              </span>
                    <input
                            type="text"
                            class="form-control custom-rounded"
                            placeholder="Search Twitter"
                            style="border-left: none"
                    />
                </div>
                <a class="ms-2" href="settings.html">
                    <i class="fa fa-cog fa-lg" class="blue"></i>
                </a>
            </div>
            <ul class="nav nav-tabs mt-2 mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item"><a class="nav-link" href="#">Trending</a></li>
                <li class="nav-item"><a class="nav-link" href="#">News</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Sports</a></li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative w-100">
                <img class="w-100" src="../img/starship.webp" />
                <span
                        class="position-absolute bottom-0 start-0 p-2 text-white h4 fw-bold mb-0"
                >SpaceX's Starship</span
                >
            </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
