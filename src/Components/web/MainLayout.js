import React from 'react';
// import '../../template/web/css/bootstrap.min.css';
// import '../../template/web/css/font-awesome.min.css';
// import '../../template/web/css/main.css';
// import '../../template/web/css/responsive.css';

export default function MainLayout(props) {
  return (
    <div>
      <header id="header">
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <a href="index.html" className="active">
                        Home
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        Menu<i className="fa fa-angle-down" />
                      </a>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <a href="#" style={{ display: 'block' }}>
                            Sub Menu
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ display: 'block' }}>
                            Sub Menu
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {props.children}
      <footer id="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="pull-left">
                Copyright © 2013 E-SHOPPER Inc. All rights reserved.
              </p>
              <p className="pull-right">
                Designed by{' '}
                <span>
                  <a target="_blank" href="http://www.themeum.com">
                    Themeum
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
