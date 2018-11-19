import React from 'react';
import SideBar from './SideBar';
import '../../template/web/css/main.css';
import '../../template/web/css/responsive.css';

export default function MainLayout(props) {
  return (
    <div className="Web">
      <header id="header">
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="mainmenu">
                  <ul className="navbar-nav flex-row">
                    <li>
                      <a href="index.html" className="active">
                        Home
                      </a>
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
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <SideBar />
            </div>
            <div className="col-sm-9 padding-right">{props.children}</div>
          </div>
        </div>
      </section>

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
