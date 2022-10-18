import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
      <ul className="list-group">
        <li
          className={`list-group-item
                    ${active === "tuiter" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">Tuiter</span>
        </li>
        <li
          className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">Home</span>
        </li>
        <li
          className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">Explore</span>
        </li>
        <li
          className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">Notifications</span>
        </li>
        <li
          className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">Messages</span>
        </li>
        <li
          className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">Bookmarks</span>
        </li>
        <li
          className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">Lists</span>
        </li>
        <li
          className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">Profile</span>
        </li>
        <li
          className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        >
          <span className="d-none d-lg-inline">More</span>
        </li>
      </ul>
      <a
        className="btn btn-primary w-100 mt-2 custom-rounded"
        href="../tuit.html"
      >
        Tweet
      </a>
    </div>
  );
};
export default NavigationSidebar;
