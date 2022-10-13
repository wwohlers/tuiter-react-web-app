const NavigationSidebar = () => {
  return `
            <ul class="list-group">
                <li class="list-group-item">
                    <i class="fab fa-twitter"></i>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-lg-inline">Home</span>
                </li>
                <li class="list-group-item active">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-lg-inline">Explore</span>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-lg-inline">Notifications</span>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-lg-inline">Messages</span>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-lg-inline">Bookmarks</span>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-lg-inline">Lists</span>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-lg-inline">Profile</span>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-ellipsis-h"></i>
                    <span class="d-none d-lg-inline">More</span>
                </li>
            </ul>
            <a
                    class="btn btn-primary w-100 mt-2 custom-rounded"
                    href="../tuit.html"
            >Tweet</a
            >
        `;
};

export default NavigationSidebar;
