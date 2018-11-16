import React from "react";
const { Consumer, Provider } = new React.createContext();
export const UIConsumer = Consumer;
export class UIProvider extends React.Component {
  constructor(props) {
    super(props);

    var params = window.location.pathname.split("/");
    this.state = {
      menuItems: [
        { name: "Home", key: "home", path: "/admin", icon: "icon-home" },
        {
          name: "Products",
          key: "products",
          path: "/admin/products",
          icon: "icon-grid"
        },
        {
          name: "Categories",
          key: "category",
          path: "/admin/categories",
          icon: "icon-grid"
        }
      ],
      activeMenu: params[1] || "home"
    };
  }

  onSelectMenu = e => {
    var value = e.target.value;
    this.setState({
      activeMenu: value
    });
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          onSelectMenu: this.onSelectMenu
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
