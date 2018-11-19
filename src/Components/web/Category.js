import React from 'react';

export default class Category extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a href="#">{item.name}</a>
          </h4>
        </div>
      </div>
    );
  }
}
