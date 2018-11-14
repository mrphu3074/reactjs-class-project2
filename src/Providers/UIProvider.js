import React from "react";
const {Consumer, Provider} = new React.createContext();
export const UIConsumer = Consumer;
export class UIProvider extends React.Component {
    state = {
        menu: [
            {name: "Home", key: "", path: "/", icon:"icon-home"},
            {name: "Products", key: "products", path: "/product", icon:"icon-grid"},
            {name: "Categories", key: "category", path: "/category", icon: "icon-grid"}
        ]
    }
}