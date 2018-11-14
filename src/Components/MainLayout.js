import React from "react";
import { Link } from "react-router-dom";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    var params = window.location.pathname.split("/");
    this.state = {
      menuItems: [
        { name: "Home", key: "home", path: "/", icon: "icon-home" },
        {
          name: "Products",
          key: "product",
          path: "/product",
          icon: "icon-grid"
        },
        {
          name: "Categories",
          key: "category",
          path: "/category",
          icon: "icon-grid"
        }
      ],
      activeMenu: params[1] || "home"
    };
  }

  render() {
    console.log(this.state.activeMenu);
    return (
      <div>
        <nav className="side-navbar">
          <div className="side-navbar-wrapper">
            <div className="sidenav-header d-flex align-items-center justify-content-center">
              <div className="sidenav-header-inner text-center">
                <img
                  src="img/www_subdomain/avatar-1.jpg"
                  alt="person"
                  className="img-fluid rounded-circle"
                />
                <h2 className="h5 text-uppercase">Anderson Hardy</h2>
                <span className="text-uppercase">Web Developer</span>
              </div>
              <div className="sidenav-header-logo">
                <a
                  href="dashboard/1-1/index.html"
                  className="brand-small text-center"
                >
                  {" "}
                  <strong>B</strong>
                  <strong className="text-primary">D</strong>
                </a>
              </div>
            </div>
            <div className="main-menu">
              <ul id="side-main-menu" className="side-menu list-unstyled">
                {this.state.menuItems.map(menu => {
                  const className =
                    this.state.activeMenu == menu.key ? "active" : "";
                  const onSelectMenu = () => {
                    this.setState({ activeMenu: menu.key });
                  };
                  return (
                    <li className={className} onClick={onSelectMenu}>
                      <Link to={menu.path}>
                        <i className={menu.icon} />
                        <span>{menu.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <div className="page home-page">
          {/* navbar*/}
          <header className="header">
            <nav className="navbar">
              <div className="container-fluid">
                <div className="navbar-holder d-flex align-items-center justify-content-between">
                  <div className="navbar-header">
                    <a id="toggle-btn" href="#" className="menu-btn">
                      <i className="icon-bars"> </i>
                    </a>
                    <a href="dashboard/1-1/index.html" className="navbar-brand">
                      <div className="brand-text d-none d-md-inline-block">
                        <span>Bootstrap </span>
                        <strong className="text-primary">Dashboard</strong>
                      </div>
                    </a>
                  </div>
                  <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        id="notifications"
                        rel="nofollow"
                        data-target="#"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-link"
                      >
                        <i className="fa fa-bell" />
                        <span className="badge badge-warning">12</span>
                      </a>
                      <ul
                        aria-labelledby="notifications"
                        className="dropdown-menu"
                      >
                        <li>
                          <a rel="nofollow" href="#" className="dropdown-item">
                            <div className="notification d-flex justify-content-between">
                              <div className="notification-content">
                                <i className="fa fa-envelope" />
                                You have 6 new messages{" "}
                              </div>
                              <div className="notification-time">
                                <small>4 minutes ago</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow" href="#" className="dropdown-item">
                            <div className="notification d-flex justify-content-between">
                              <div className="notification-content">
                                <i className="fa fa-twitter" />
                                You have 2 followers
                              </div>
                              <div className="notification-time">
                                <small>4 minutes ago</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow" href="#" className="dropdown-item">
                            <div className="notification d-flex justify-content-between">
                              <div className="notification-content">
                                <i className="fa fa-upload" />
                                Server Rebooted
                              </div>
                              <div className="notification-time">
                                <small>4 minutes ago</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow" href="#" className="dropdown-item">
                            <div className="notification d-flex justify-content-between">
                              <div className="notification-content">
                                <i className="fa fa-twitter" />
                                You have 2 followers
                              </div>
                              <div className="notification-time">
                                <small>10 minutes ago</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="nofollow"
                            href="#"
                            className="dropdown-item all-notifications text-center"
                          >
                            {" "}
                            <strong>
                              {" "}
                              <i className="fa fa-bell" />
                              view all notifications{" "}
                            </strong>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        id="messages"
                        rel="nofollow"
                        data-target="#"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-link"
                      >
                        <i className="fa fa-envelope" />
                        <span className="badge badge-info">10</span>
                      </a>
                      <ul
                        aria-labelledby="notifications"
                        className="dropdown-menu"
                      >
                        <li>
                          <a
                            rel="nofollow"
                            href="#"
                            className="dropdown-item d-flex"
                          >
                            <div className="msg-profile">
                              {" "}
                              <img
                                src="img/www_subdomain/avatar-1.jpg"
                                alt="..."
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div className="msg-body">
                              <h3 className="h5">Jason Doe</h3>
                              <span>sent you a direct message</span>
                              <small>3 days ago at 7:58 pm - 10.06.2014</small>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="nofollow"
                            href="#"
                            className="dropdown-item d-flex"
                          >
                            <div className="msg-profile">
                              {" "}
                              <img
                                src="img/www_subdomain/avatar-2.jpg"
                                alt="..."
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div className="msg-body">
                              <h3 className="h5">Frank Williams</h3>
                              <span>sent you a direct message</span>
                              <small>3 days ago at 7:58 pm - 10.06.2014</small>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="nofollow"
                            href="#"
                            className="dropdown-item d-flex"
                          >
                            <div className="msg-profile">
                              {" "}
                              <img
                                src="img/www_subdomain/avatar-3.jpg"
                                alt="..."
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div className="msg-body">
                              <h3 className="h5">Ashley Wood</h3>
                              <span>sent you a direct message</span>
                              <small>3 days ago at 7:58 pm - 10.06.2014</small>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="nofollow"
                            href="#"
                            className="dropdown-item all-notifications text-center"
                          >
                            {" "}
                            <strong>
                              {" "}
                              <i className="fa fa-envelope" />
                              Read all messages{" "}
                            </strong>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        href="dashboard/1-1/login.html"
                        className="nav-link logout"
                      >
                        Logout
                        <i className="fa fa-sign-out" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          {this.props.children}
          <footer className="main-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <p>Your company © 2017-2019</p>
                </div>
                <div className="col-sm-6 text-right">
                  <p>
                    Design by{" "}
                    <a href="https://bootstrapious.com" className="external">
                      Bootstrapious
                    </a>
                  </p>
                  {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MainLayout;
