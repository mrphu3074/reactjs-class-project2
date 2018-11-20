import React from 'react';
import { Link } from 'react-router-dom';

export default class Category extends React.Component {
  render() {
    const { item, activeItem, handleOnClickMenu } = this.props;
    const classNames = activeItem == item.name ? 'active' : null;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <Link
              to={{
                pathname: '/',
                search: `?category=${item.name}`
              }}
              className={classNames}
            >
              {item.name}
            </Link>
          </h4>
        </div>
      </div>
    );
  }
}
