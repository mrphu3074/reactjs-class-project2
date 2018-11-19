import React from 'react';
import {
  SideBarProvider,
  SiderBarConsumer
} from '../../Providers/web/SideBarProvider';
import Category from './Category';

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          <SideBarProvider>
            <SiderBarConsumer>
              {value => {
                return value.list.map((item, index) => (                  
                  <Category key={index} item={item} />
                ));
              }}
            </SiderBarConsumer>
          </SideBarProvider>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Fashion</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
