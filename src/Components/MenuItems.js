import React from "react";
function MenuItems(props) {
    menu = props.menu;
    const className = menu.activeMenu == menu.key ? "active" : "";
    return (
        <ul id="side-main-menu" className="side-menu list-unstyled">
            <li className={className} onClick={onSelectMenu}>
              <Link to={menu.path}>
                <i className={menu.icon} />
                <span>{menu.name}</span>
              </Link>
            </li>
      </ul> 
    );
}