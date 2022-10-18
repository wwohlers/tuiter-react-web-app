import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore-component";

function Tuiter() {
  return (
    <div className="row mt-2">
      <Nav />
      <NavigationSidebar active="home" />
      <ExploreComponent />
      <WhoToFollowList />
    </div>
  );
}
export default Tuiter;
